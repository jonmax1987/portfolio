import { createGlobalStyle } from 'styled-components';

/**
 * Global styles for the application
 * Features: Typography, scrollbar, accessibility, print styles
 */
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  /* Skip navigation for accessibility */
  .skip-navigation {
    position: absolute;
    top: -100px;
    left: 0;
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    text-decoration: none;
    z-index: ${({ theme }) => theme.zIndex.skipLink};
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} 0;
    
    &:focus {
      top: 0;
    }
  }
  
  /* Focus styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.brandPrimary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.brandHover};
  }
  
  /* Selection styling */
  ::selection {
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
  }
  
  ::-moz-selection {
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
  }
  
  /* Link styles */
  a {
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.brandHover};
    }
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }
  
  /* Heading defaults */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
  }
  
  /* Paragraph defaults */
  p {
    margin: 0;
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
  }
  
  /* Button defaults */
  button {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    cursor: pointer;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
    }
  }
  
  /* Form element defaults */
  input, textarea, select {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :focus-visible {
      outline-width: 3px;
    }
    
    .skip-navigation {
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
  
  /* Print styles */
  @media print {
    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    nav, .skip-navigation, button {
      display: none !important;
    }
    
    a {
      text-decoration: underline !important;
    }
    
    h1, h2, h3, h4, h5, h6 {
      page-break-after: avoid;
    }
    
    p, li {
      orphans: 3;
      widows: 3;
    }
  }
  
  /* Reduce motion preferences */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
