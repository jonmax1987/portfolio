import styled, { keyframes, css } from 'styled-components';

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const _ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

// Variant styles
const getVariantStyles = ({ theme, $variant }) => {
  const variants = {
    primary: css`
      background: linear-gradient(135deg, 
        ${theme.colors.brandPrimary}, 
        ${theme.colors.brandHover}
      );
      color: ${theme.colors.white};
      border: 2px solid transparent;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, 
          ${theme.colors.brandHover}, 
          ${theme.colors.brandPrimary}
        );
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
      
      &:active:not(:disabled) {
        transform: translateY(0);
        box-shadow: ${theme.shadows.md};
      }
    `,
    
    secondary: css`
      background: ${theme.colors.backgroundSecondary};
      color: ${theme.colors.textPrimary};
      border: 2px solid ${theme.colors.borderDefault};
      
      &:hover:not(:disabled) {
        background: ${theme.colors.backgroundAccent};
        border-color: ${theme.colors.brandPrimary};
        transform: translateY(-2px);
      }
    `,
    
    outline: css`
      background: transparent;
      color: ${theme.colors.brandPrimary};
      border: 2px solid ${theme.colors.brandPrimary};
      
      &:hover:not(:disabled) {
        background: ${theme.colors.brandPrimary};
        color: ${theme.colors.white};
        transform: translateY(-2px);
      }
    `,
    
    ghost: css`
      background: transparent;
      color: ${theme.colors.textSecondary};
      border: 2px solid transparent;
      
      &:hover:not(:disabled) {
        background: ${theme.colors.backgroundSecondary};
        color: ${theme.colors.textPrimary};
      }
    `,
  };
  
  return variants[$variant] || variants.primary;
};

// Size styles
const getSizeStyles = ({ $size }) => {
  const sizes = {
    small: css`
      padding: 8px 16px;
      font-size: 0.875rem;
      min-height: 36px;
    `,
    medium: css`
      padding: 12px 24px;
      font-size: 1rem;
      min-height: 44px;
    `,
    large: css`
      padding: 16px 32px;
      font-size: 1.125rem;
      min-height: 52px;
    `,
  };
  
  return sizes[$size] || sizes.medium;
};

/**
 * Styled component for CTA buttons
 * Features: Multiple variants, sizes, animations, accessibility
 */
export const CtaButtonStyled = styled.button`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  user-select: none;
  
  /* Transitions */
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Animation */
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-in-out ${({ $delay }) => $delay || 600}ms forwards;
  
  /* Apply variant styles */
  ${getVariantStyles}
  
  /* Apply size styles */
  ${getSizeStyles}
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }
  
  /* Disabled state */
  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    
    &:hover {
      transform: none !important;
      box-shadow: none !important;
    }
  }
  
  /* Loading state */
  &[aria-busy="true"] {
    cursor: wait;
    
    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
  }
  
  /* Focus styles for accessibility */
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  /* Screen reader only text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Responsive adjustments */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
    opacity: 1;
    
    &:hover,
    &:active {
      transform: none !important;
    }
    
    &::before {
      display: none;
    }
    
    .loading-spinner {
      animation: none;
    }
  }
  
  /* High contrast mode */
  @media (prefers-contrast: high) {
    border-width: 3px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
  
  /* Print styles */
  @media print {
    background: white !important;
    color: black !important;
    border: 2px solid black !important;
    box-shadow: none !important;
  }
`;
