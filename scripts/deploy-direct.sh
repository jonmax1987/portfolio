#!/bin/bash

# Direct AWS CloudFormation Deployment Script
# Alternative to Serverless Framework

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

STAGE=${1:-dev}
REGION="eu-central-1"
PROJECT_NAME="jonmax1987-portfolio"

log() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Convert Serverless YAML to pure CloudFormation
convert_storage_template() {
    cat > /tmp/storage-cf.yml << 'EOF'
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Portfolio S3 Storage Stack'

Parameters:
  Stage:
    Type: String
    Default: dev
    AllowedValues: [dev, prod]

Resources:
  WebsiteBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub "${AWS::StackName}-${AWS::AccountId}"
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true
      CorsConfiguration:
        CorsRules:
          - AllowedHeaders: ['*']
            AllowedMethods: [GET, HEAD]
            AllowedOrigins: ['*']
            MaxAge: 3000
      Tags:
        - Key: Project
          Value: portfolio
        - Key: Stage
          Value: !Ref Stage
        - Key: ManagedBy
          Value: cloudformation

Outputs:
  S3BucketName:
    Description: 'S3 Bucket Name'
    Value: !Ref WebsiteBucket
    Export:
      Name: !Sub "${AWS::StackName}-S3BucketName"
  
  S3BucketArn:
    Description: 'S3 Bucket ARN'
    Value: !GetAtt WebsiteBucket.Arn
    Export:
      Name: !Sub "${AWS::StackName}-S3BucketArn"
  
  S3BucketDomainName:
    Description: 'S3 Bucket Domain Name'
    Value: !GetAtt WebsiteBucket.RegionalDomainName
    Export:
      Name: !Sub "${AWS::StackName}-S3BucketDomainName"
EOF
}

convert_cdn_template() {
    cat > /tmp/cdn-cf.yml << 'EOF'
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Portfolio CloudFront CDN Stack'

Parameters:
  Stage:
    Type: String
    Default: dev
    AllowedValues: [dev, prod]
  StorageStackName:
    Type: String

Resources:
  OriginAccessControl:
    Type: AWS::CloudFront::OriginAccessControl
    Properties:
      OriginAccessControlConfig:
        Name: !Sub "${AWS::StackName}-OAC"
        OriginAccessControlOriginType: s3
        SigningBehavior: always
        SigningProtocol: sigv4

  SecurityHeadersFunction:
    Type: AWS::CloudFront::Function
    Properties:
      Name: !Sub "${AWS::StackName}-SecurityHeaders"
      AutoPublish: true
      FunctionConfig:
        Comment: 'Add security headers'
        Runtime: cloudfront-js-1.0
      FunctionCode: |
        function handler(event) {
          var response = event.response;
          var headers = response.headers;
          
          headers['strict-transport-security'] = { value: 'max-age=31536000; includeSubDomains; preload' };
          headers['content-security-policy'] = { value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;" };
          headers['x-frame-options'] = { value: 'DENY' };
          headers['x-content-type-options'] = { value: 'nosniff' };
          headers['referrer-policy'] = { value: 'strict-origin-when-cross-origin' };
          
          return response;
        }

  S3BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: 
        Fn::ImportValue: !Sub "${StorageStackName}-S3BucketName"
      PolicyDocument:
        Statement:
          - Sid: AllowCloudFrontServicePrincipal
            Effect: Allow
            Principal:
              Service: cloudfront.amazonaws.com
            Action: s3:GetObject
            Resource: !Sub 
              - "${BucketArn}/*"
              - BucketArn: 
                  Fn::ImportValue: !Sub "${StorageStackName}-S3BucketArn"
            Condition:
              StringEquals:
                'AWS:SourceArn': !Sub "arn:aws:cloudfront::${AWS::AccountId}:distribution/${CloudFrontDistribution}"

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Enabled: true
        Comment: !Sub "Portfolio CDN - ${Stage}"
        DefaultRootObject: index.html
        PriceClass: !If 
          - IsProd
          - PriceClass_200
          - PriceClass_100
        Origins:
          - Id: S3Origin
            DomainName: 
              Fn::ImportValue: !Sub "${StorageStackName}-S3BucketDomainName"
            OriginAccessControlId: !Ref OriginAccessControl
            S3OriginConfig:
              OriginAccessIdentity: ''
        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          CachePolicyId: 4135ea2d-6df8-44a3-9df3-4b5a84be39ad
          FunctionAssociations:
            - EventType: viewer-response
              FunctionARN: !GetAtt SecurityHeadersFunction.FunctionARN
        CustomErrorResponses:
          - ErrorCode: 404
            ResponseCode: 200
            ResponsePagePath: /index.html
        HttpVersion: http2
      Tags:
        - Key: Project
          Value: portfolio
        - Key: Stage
          Value: !Ref Stage

Conditions:
  IsProd: !Equals [!Ref Stage, prod]

Outputs:
  CloudFrontDistributionId:
    Description: 'CloudFront Distribution ID'
    Value: !Ref CloudFrontDistribution
    
  CloudFrontDomainName:
    Description: 'CloudFront Domain Name'
    Value: !GetAtt CloudFrontDistribution.DomainName
    
  WebsiteURL:
    Description: 'Website URL'
    Value: !Sub "https://${CloudFrontDistribution.DomainName}"
EOF
}

deploy_storage_stack() {
    log "Deploying S3 storage stack..."
    convert_storage_template
    
    aws cloudformation deploy \
        --template-file /tmp/storage-cf.yml \
        --stack-name "${PROJECT_NAME}-storage-${STAGE}" \
        --region ${REGION} \
        --parameter-overrides Stage=${STAGE} \
        --tags Project=portfolio Stage=${STAGE} ManagedBy=cloudformation \
        --no-fail-on-empty-changeset
    
    success "Storage stack deployed successfully"
}

deploy_cdn_stack() {
    log "Deploying CloudFront CDN stack..."
    convert_cdn_template
    
    STORAGE_STACK_NAME="${PROJECT_NAME}-storage-${STAGE}"
    
    aws cloudformation deploy \
        --template-file /tmp/cdn-cf.yml \
        --stack-name "${PROJECT_NAME}-cdn-${STAGE}" \
        --region ${REGION} \
        --parameter-overrides Stage=${STAGE} StorageStackName=${STORAGE_STACK_NAME} \
        --tags Project=portfolio Stage=${STAGE} ManagedBy=cloudformation \
        --no-fail-on-empty-changeset
    
    success "CDN stack deployed successfully"
}

get_stack_outputs() {
    log "Getting deployment information..."
    
    STORAGE_STACK="${PROJECT_NAME}-storage-${STAGE}"
    CDN_STACK="${PROJECT_NAME}-cdn-${STAGE}"
    
    BUCKET_NAME=$(aws cloudformation describe-stacks \
        --stack-name ${STORAGE_STACK} \
        --region ${REGION} \
        --query "Stacks[0].Outputs[?OutputKey=='S3BucketName'].OutputValue" \
        --output text)
    
    DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
        --stack-name ${CDN_STACK} \
        --region ${REGION} \
        --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
        --output text)
    
    WEBSITE_URL=$(aws cloudformation describe-stacks \
        --stack-name ${CDN_STACK} \
        --region ${REGION} \
        --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" \
        --output text)
    
    echo "BUCKET_NAME=${BUCKET_NAME}" > /tmp/stack-outputs-${STAGE}
    echo "DISTRIBUTION_ID=${DISTRIBUTION_ID}" >> /tmp/stack-outputs-${STAGE}
    echo "WEBSITE_URL=${WEBSITE_URL}" >> /tmp/stack-outputs-${STAGE}
    
    log "Bucket: ${BUCKET_NAME}"
    log "Distribution: ${DISTRIBUTION_ID}"
    log "Website: ${WEBSITE_URL}"
}

main() {
    log "Starting direct CloudFormation deployment for stage: ${STAGE}"
    log "=================================================="
    
    # Check AWS credentials
    aws sts get-caller-identity >/dev/null 2>&1 || error "AWS credentials not configured"
    
    deploy_storage_stack
    deploy_cdn_stack
    get_stack_outputs
    
    success "Infrastructure deployment completed!"
    log "=================================================="
}

# Cleanup function
cleanup() {
    rm -f /tmp/storage-cf.yml /tmp/cdn-cf.yml
}

trap cleanup EXIT
main "$@"
