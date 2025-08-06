#!/bin/bash

# Environment Validation Script
# Validates all prerequisites for deployment

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Counters
CHECKS_PASSED=0
CHECKS_FAILED=0

check_command() {
    if command -v "$1" >/dev/null 2>&1; then
        echo -e "${GREEN}✓${NC} $1 is installed"
        ((CHECKS_PASSED++))
        if [ "$2" ]; then
            VERSION=$($1 $2 2>/dev/null || echo "Unknown")
            echo -e "  ${BLUE}Version:${NC} $VERSION"
        fi
    else
        echo -e "${RED}✗${NC} $1 is not installed"
        ((CHECKS_FAILED++))
    fi
}

check_aws_config() {
    echo -e "${BLUE}Checking AWS Configuration...${NC}"
    
    if aws sts get-caller-identity >/dev/null 2>&1; then
        echo -e "${GREEN}✓${NC} AWS credentials configured"
        ((CHECKS_PASSED++))
        
        ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
        REGION=$(aws configure get region || echo "Not set")
        echo -e "  ${BLUE}Account ID:${NC} $ACCOUNT_ID"
        echo -e "  ${BLUE}Region:${NC} $REGION"
    else
        echo -e "${RED}✗${NC} AWS credentials not configured"
        ((CHECKS_FAILED++))
    fi
}

check_node_deps() {
    echo -e "${BLUE}Checking Node.js dependencies...${NC}"
    
    if [ -f "package.json" ]; then
        echo -e "${GREEN}✓${NC} package.json found"
        ((CHECKS_PASSED++))
        
        if [ -d "node_modules" ]; then
            echo -e "${GREEN}✓${NC} node_modules exists"
            ((CHECKS_PASSED++))
        else
            echo -e "${YELLOW}!${NC} node_modules not found - run 'npm install'"
        fi
    else
        echo -e "${RED}✗${NC} package.json not found"
        ((CHECKS_FAILED++))
    fi
}

check_serverless_config() {
    echo -e "${BLUE}Checking Serverless configuration...${NC}"
    
    if [ -f "infrastructure/serverless.yml" ]; then
        echo -e "${GREEN}✓${NC} Serverless configuration found"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}✗${NC} infrastructure/serverless.yml not found"
        ((CHECKS_FAILED++))
    fi
    
    if [ -f "infrastructure/environments/dev.yml" ]; then
        echo -e "${GREEN}✓${NC} Dev environment config found"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}✗${NC} Dev environment config not found"
        ((CHECKS_FAILED++))
    fi
    
    if [ -f "infrastructure/environments/prod.yml" ]; then
        echo -e "${GREEN}✓${NC} Prod environment config found"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}✗${NC} Prod environment config not found"
        ((CHECKS_FAILED++))
    fi
}

main() {
    echo -e "${BLUE}🔍 Environment Validation Report${NC}"
    echo "=================================="
    
    echo -e "\n${BLUE}Required Tools:${NC}"
    check_command "node" "--version"
    check_command "npm" "--version"
    check_command "aws" "--version"
    check_command "serverless" "--version"
    
    echo -e "\n${BLUE}AWS Configuration:${NC}"
    check_aws_config
    
    echo -e "\n${BLUE}Project Dependencies:${NC}"
    check_node_deps
    
    echo -e "\n${BLUE}Serverless Configuration:${NC}"
    check_serverless_config
    
    echo -e "\n=================================="
    echo -e "Summary: ${GREEN}$CHECKS_PASSED passed${NC}, ${RED}$CHECKS_FAILED failed${NC}"
    
    if [ $CHECKS_FAILED -eq 0 ]; then
        echo -e "${GREEN}✅ Environment is ready for deployment!${NC}"
        exit 0
    else
        echo -e "${RED}❌ Please fix the issues above before deploying${NC}"
        exit 1
    fi
}

main "$@"
