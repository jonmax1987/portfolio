# Portfolio Website 🌐

Modern, responsive portfolio website built with React and deployed on AWS with enterprise-grade infrastructure.

## 🚀 Live Website

**🌍 [View Live Site](https://d74jg8xfzqmej.cloudfront.net)**

## ✨ Features

- **⚡ Modern Tech Stack**: React 18 + Vite for fast development
- **🎨 Styled Components**: Professional component-based styling
- **📱 Responsive Design**: Mobile-first approach with atomic design
- **♿ Accessibility First**: WCAG 2.1 AA compliant with screen reader support
- **🔐 Enterprise Security**: AWS CloudFront with Origin Access Control
- **🚀 Auto Deployment**: GitHub Actions CI/CD pipeline
- **⚡ Global CDN**: CloudFront for worldwide performance
- **🛡️ Security Headers**: CSP, HSTS, and frame protection

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CloudFront    │────│   S3 Bucket     │────│   React App     │
│ (CDN/HTTPS/OAC) │    │ (Private+Secure)│    │   (SPA/Vite)    │
│ Security Headers│    │  Origin Access  │    │  Professional   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Infrastructure Components
- **S3**: Static website hosting with blocked public access
- **CloudFront**: Global CDN with Origin Access Control (OAC)
- **Security**: Automatic security headers via CloudFront Functions
- **Multi-Environment**: Separate dev/prod configurations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Atomic Design** - Scalable component architecture

### Infrastructure
- **AWS S3** - Static hosting
- **AWS CloudFront** - Global CDN
- **AWS CloudFormation** - Infrastructure as Code
- **Serverless Framework** - Deployment automation

### DevOps
- **GitHub Actions** - CI/CD pipeline
- **ESLint** - Code quality
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- AWS CLI (for deployment)

### Local Development
```bash
# Clone the repository
git clone https://github.com/jonmax1987/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production
```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple component groups
│   └── organisms/      # Complex components
├── layout/             # Layout components
├── pages/              # Page components
├── styles/             # Global styles
└── assets/             # Static assets

infrastructure/
├── stacks/             # CloudFormation stacks
├── environments/       # Environment configs
└── serverless.yml      # Main config

.github/workflows/      # CI/CD pipelines
docs/                   # Documentation
scripts/               # Deployment scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:a11y` - Run accessibility linting
- `npm run type-check` - Run TypeScript checks
- `npm run a11y:test` - Accessibility testing guide

## 📚 Documentation

- **[Architecture Guide](./ARCHITECTURE.md)** - Complete infrastructure overview
- **[Setup Guide](./docs/SETUP.md)** - Detailed deployment instructions
- **[Deployment Success](./docs/DEPLOYMENT_SUCCESS.md)** - Current deployment status
- **[Accessibility Guide](./docs/ACCESSIBILITY.md)** - WCAG 2.1 AA compliance details

## 🔐 Security

- ✅ Origin Access Control (OAC) for S3 security
- ✅ Security headers (CSP, HSTS, X-Frame-Options)
- ✅ HTTPS-only with CloudFront
- ✅ No exposed credentials in code
- ✅ GitHub Secrets for sensitive data

## ♿ Accessibility

- ✅ **WCAG 2.1 AA Compliance**: Meeting international accessibility standards
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks
- ✅ **Keyboard Navigation**: Full keyboard accessibility support
- ✅ **Screen Reader Support**: ARIA labels and descriptions
- ✅ **Focus Management**: Visible focus indicators and logical tab order
- ✅ **Color Contrast**: WCAG AA compliant color ratios (4.5:1 minimum)
- ✅ **Responsive Text**: Scalable fonts up to 200% zoom
- ✅ **Alternative Text**: Descriptive alt text for all images
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion` user preferences
- ✅ **High Contrast**: Supports `prefers-contrast: high` mode
- ✅ **Automated Testing**: ESLint accessibility rules with jsx-a11y
- ⚠️ **Manual Testing**: Ongoing screen reader testing with NVDA/JAWS

**See [Accessibility Guide](./docs/ACCESSIBILITY.md) for detailed compliance information.**

## 🌍 Performance

- ⚡ **Global CDN**: CloudFront edge locations worldwide
- 📦 **Optimized Build**: Vite production optimization
- 🗜️ **Compression**: Gzip/Brotli compression enabled
- 🔄 **Caching**: Intelligent cache policies

## 📊 Current Status

| Component | Status | URL/Details |
|-----------|--------|-------------|
| 🌍 Website | ✅ **Live** | https://d74jg8xfzqmej.cloudfront.net |
| 🪣 S3 Bucket | ✅ **Secure** | `jonmax1987-portfolio-storage-dev-*` |
| 📡 CloudFront | ✅ **Active** | Distribution ID: `EH4PRDLQQSUVE` |
| 🔐 Security | ✅ **Enhanced** | OAC + Security Headers |
| 🚀 CI/CD | ✅ **Automated** | GitHub Actions |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Jonathan Max** - [GitHub](https://github.com/jonmax1987)

---

**Website Live**: https://d74jg8xfzqmej.cloudfront.net 🌐
