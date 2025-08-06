# Portfolio Project - Setup & Deployment Guide

## 🏗️ Architecture Overview

This portfolio uses a modern, modular infrastructure architecture:

```
📁 Project Structure
├── 🌐 Frontend (React + Vite)
├── ☁️  Infrastructure (Serverless Framework)
├── 🚀 CI/CD (GitHub Actions)
└── 📊 Monitoring (CloudWatch)
```

### Infrastructure Components
- **S3**: Static website hosting with blocked public access
- **CloudFront**: Global CDN with Origin Access Control (OAC)
- **Security**: HSTS, CSP, and frame protection headers
- **Multi-Environment**: Separate dev/prod configurations

## 🚀 Quick Start

### Prerequisites
1. **Node.js** v18+ ([Download](https://nodejs.org/))
2. **AWS CLI** v2+ ([Install Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html))
3. **Git** ([Download](https://git-scm.com/))

### 1. Clone & Install
```bash
git clone <repository-url>
cd portfolio
npm install
```

### 2. AWS Configuration
```bash
# Configure AWS credentials
aws configure

# Verify configuration
aws sts get-caller-identity
```

### 3. Environment Validation
```bash
# Validate all prerequisites
npm run validate
```

### 4. Development
```bash
# Start local development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment Options

### Option 1: Automated Scripts (Recommended)
```bash
# Deploy to development
npm run deploy:dev

# Deploy to production
npm run deploy:prod
```

### Option 2: Manual Serverless
```bash
# Development environment
npm run sls:deploy:dev

# Production environment
npm run sls:deploy:prod
```

### Option 3: GitHub Actions (Automatic)
- **Development**: Push to `develop` branch
- **Production**: Push to `main` branch
- **Manual**: Use GitHub Actions "Run workflow" button

## 🌍 Environment Configuration

### Development Environment
- **Purpose**: Testing and development
- **CloudFront**: Price Class 100 (US, Canada, Europe)
- **Features**: Development-friendly settings

### Production Environment
- **Purpose**: Live website
- **CloudFront**: Price Class 200 (Global except Asia/Australia)
- **Features**: Production-optimized settings

## 🔧 Configuration Files

### Infrastructure Structure
```
infrastructure/
├── serverless.yml          # Main configuration
├── environments/
│   ├── dev.yml             # Development settings
│   └── prod.yml            # Production settings
└── stacks/
    ├── storage.yml         # S3 bucket configuration
    └── cdn.yml             # CloudFront setup
```

### Key Features
- **Modular Architecture**: Separated concerns for maintainability
- **Origin Access Control**: Enhanced security over public buckets
- **Security Headers**: Automatic injection of security headers
- **Environment Separation**: Different settings per environment
- **Cost Optimization**: Appropriate price classes per environment

## 🛡️ Security Features

### Infrastructure Security
- ✅ **S3 Public Access Block**: Prevents accidental public exposure
- ✅ **Origin Access Control (OAC)**: Secure CloudFront → S3 access
- ✅ **HTTPS Only**: CloudFront enforces HTTPS
- ✅ **Security Headers**: HSTS, CSP, X-Frame-Options

### Deployment Security
- ✅ **IAM Roles**: Least privilege access
- ✅ **Environment Variables**: Secure secret management
- ✅ **Audit Logging**: CloudFormation stack events

## 📊 Monitoring & Maintenance

### Available Commands
```bash
# View stack information
npm run sls:info

# Remove environment (use with caution)
npm run sls:remove

# Validate environment setup
npm run validate
```

### Monitoring Features
- **CloudFormation**: Infrastructure state tracking
- **CloudFront**: Request metrics and error rates
- **S3**: Storage metrics and access logs (optional)

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
1. **Quality Checks**: Linting, type checking, security audit
2. **Build**: Create optimized production build
3. **Deploy**: Infrastructure and file deployment
4. **Test**: Smoke tests and security validation
5. **Notify**: PR comments with preview URLs

### Secrets Required
Add these to GitHub repository secrets:
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. AWS Credentials Not Found
```bash
# Check current configuration
aws sts get-caller-identity

# Reconfigure if needed
aws configure
```

#### 2. Serverless Command Not Found
```bash
# Install globally
npm install -g serverless

# Or use npx
npx serverless --version
```

#### 3. Build Failures
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

#### 4. Deployment Stuck
```bash
# Check CloudFormation events
aws cloudformation describe-stack-events \
  --stack-name jonmax1987-portfolio-dev \
  --region eu-central-1
```

### Getting Help
- Review CloudFormation stack events in AWS Console
- Check GitHub Actions logs for CI/CD issues
- Use `npm run validate` to check environment setup

## 📈 Performance Optimization

### Built-in Optimizations
- **Vite Build**: Modern bundling with tree-shaking
- **CloudFront**: Global edge caching
- **Asset Optimization**: Automatic compression
- **Cache Headers**: Optimal cache strategies

### Performance Monitoring
- CloudFront cache hit ratios
- Origin response times
- Error rate monitoring

## 🔮 Future Enhancements

Planned improvements (cost-free):
- [ ] CloudWatch monitoring dashboard
- [ ] Automated security scanning
- [ ] Performance budgets
- [ ] Branch-based preview deployments
- [ ] Blue-green deployments

---

## 📞 Support

For issues or questions:
1. Check this README first
2. Review CloudFormation events
3. Check GitHub Actions logs
4. Validate environment setup

**Happy Deploying! 🚀**
