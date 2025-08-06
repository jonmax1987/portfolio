#!/bin/bash

# Professional Deployment Script for Portfolio
# Usage: ./scripts/deploy.sh [dev|prod]
# This script handles the complete deployment pipeline with proper error handling

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
STAGE=${1:-dev}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
INFRASTRUCTURE_DIR="$PROJECT_ROOT/infrastructure"

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Validate environment
validate_environment() {
    log "Validating environment..."
    
    # Check if stage is valid
    if [[ "$STAGE" != "dev" && "$STAGE" != "prod" ]]; then
        error "Invalid stage: $STAGE. Must be 'dev' or 'prod'"
    fi
    
    # Check if required tools are installed
    command -v npm >/dev/null 2>&1 || error "npm is required but not installed"
    command -v aws >/dev/null 2>&1 || error "AWS CLI is required but not installed"
    command -v serverless >/dev/null 2>&1 || error "Serverless Framework is required but not installed"
    
    # Check AWS credentials
    aws sts get-caller-identity >/dev/null 2>&1 || error "AWS credentials not configured"
    
    success "Environment validation passed"
}

# Build the application
build_application() {
    log "Building React application..."
    cd "$PROJECT_ROOT"
    
    # Clean previous build
    if [ -d "dist" ]; then
        rm -rf dist
        log "Cleaned previous build"
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "Installing dependencies..."
        npm ci
    fi
    
    # Build the application
    npm run build || error "Build failed"
    
    # Verify build output
    if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
        error "Build output is invalid"
    fi
    
    success "Application built successfully"
}

# Deploy infrastructure
deploy_infrastructure() {
    log "Deploying infrastructure for stage: $STAGE..."
    cd "$INFRASTRUCTURE_DIR"
    
    # Deploy with proper error handling
    if serverless deploy --stage "$STAGE" --verbose; then
        success "Infrastructure deployed successfully"
    else
        error "Infrastructure deployment failed"
    fi
}

# Get infrastructure outputs
get_infrastructure_info() {
    log "Retrieving infrastructure information..."
    
    # Get stack outputs
    STACK_NAME="jonmax1987-portfolio-$STAGE"
    
    BUCKET_NAME=$(aws cloudformation describe-stacks \
        --stack-name "$STACK_NAME" \
        --region eu-central-1 \
        --query "Stacks[0].Outputs[?OutputKey=='S3BucketName'].OutputValue" \
        --output text 2>/dev/null || echo "")
    
    DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
        --stack-name "$STACK_NAME" \
        --region eu-central-1 \
        --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
        --output text 2>/dev/null || echo "")
    
    CLOUDFRONT_URL=$(aws cloudformation describe-stacks \
        --stack-name "$STACK_NAME" \
        --region eu-central-1 \
        --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" \
        --output text 2>/dev/null || echo "")
    
    if [ -z "$BUCKET_NAME" ] || [ -z "$DISTRIBUTION_ID" ]; then
        error "Failed to retrieve infrastructure information"
    fi
    
    log "S3 Bucket: $BUCKET_NAME"
    log "CloudFront Distribution: $DISTRIBUTION_ID"
    log "Website URL: $CLOUDFRONT_URL"
}

# Sync files to S3
sync_files() {
    log "Syncing files to S3 bucket: $BUCKET_NAME..."
    cd "$PROJECT_ROOT"
    
    # Sync with delete flag to remove old files
    if aws s3 sync dist/ "s3://$BUCKET_NAME" --delete --cache-control "max-age=31536000" --exclude "*.html" --exclude "*.json"; then
        # Sync HTML files with different cache control
        if aws s3 sync dist/ "s3://$BUCKET_NAME" --cache-control "max-age=0, must-revalidate" --include "*.html" --include "*.json"; then
            success "Files synced successfully"
        else
            error "Failed to sync HTML files"
        fi
    else
        error "Failed to sync files to S3"
    fi
}

# Invalidate CloudFront cache
invalidate_cache() {
    log "Invalidating CloudFront cache..."
    
    # Create invalidation
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id "$DISTRIBUTION_ID" \
        --paths "/*" \
        --query "Invalidation.Id" \
        --output text) || error "Failed to create invalidation"
    
    log "Invalidation created: $INVALIDATION_ID"
    
    # Optionally wait for invalidation to complete (uncomment if needed)
    # log "Waiting for invalidation to complete..."
    # aws cloudfront wait invalidation-completed \
    #     --distribution-id "$DISTRIBUTION_ID" \
    #     --id "$INVALIDATION_ID" || warning "Invalidation wait failed or timed out"
    
    success "Cache invalidated successfully"
}

# Main deployment function
main() {
    log "Starting deployment pipeline for stage: $STAGE"
    log "============================================"
    
    validate_environment
    build_application
    deploy_infrastructure
    get_infrastructure_info
    sync_files
    invalidate_cache
    
    log "============================================"
    success "Deployment completed successfully!"
    success "Website URL: $CLOUDFRONT_URL"
    log "============================================"
}

# Run main function
main "$@"
