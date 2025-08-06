import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;


export const HeroTitleStyled = styled.h1`
  /* Base styles - Mobile First */
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-align: center;
  
  /* Animation */
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-in-out ${({ $delay = 0 }) => `${$delay}ms`} forwards;
  
  /* Interactive effects */
  transition: all ${({ theme }) => theme.transitions.medium};
  cursor: default;
  
  /* Hover effects with gradient text */
  &:hover {
    transform: translateY(-2px);
    
    /* Apply gradient only on hover where supported */
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.textPrimary} 0%,
        ${({ theme }) => theme.colors.brandPrimary} 50%,
        ${({ theme }) => theme.colors.textPrimary} 100%
      );
      background-size: 200% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${shimmer} 2s ease-in-out infinite;
    }
  }
  
  /* Focus for accessibility */
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  /* Responsive breakpoints - Progressive Enhancement */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    text-align: left;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }
  
  /* Dark mode optimizations */
  @media (prefers-color-scheme: dark) {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
    
    &:hover {
      animation: none;
      transform: none;
    }
  }
  
  /* Print styles */
  @media print {
    background: none !important;
    -webkit-text-fill-color: initial;
    color: black !important;
    text-shadow: none;
  }
`;