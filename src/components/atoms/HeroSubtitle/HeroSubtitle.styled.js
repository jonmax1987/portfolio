import styled, { keyframes } from 'styled-components';

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

const _typeWriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const _blink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: ${({ theme }) => theme.colors.brandPrimary};
  }
`;

/**
 * Styled component for hero subtitles
 * Features: Responsive typography, smooth animations, accessibility support
 */
export const HeroSubtitleStyled = styled.p`
  /* Base styles - Mobile First */
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-align: center;
  max-width: 100%;
  
  /* Animation with dynamic delay */
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-in-out ${({ $delay }) => $delay || 400}ms forwards;
  
  /* Interactive effects */
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Subtle hover effect */
  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px);
  }
  
  /* Focus for accessibility */
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  /* Typography enhancements */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* Responsive breakpoints - Progressive Enhancement */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-align: left;
    max-width: 80%;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    max-width: 70%;
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
  }
  
  /* Special styling for different HTML elements */
  &[role="heading"] {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  /* Dark mode optimizations */
  @media (prefers-color-scheme: dark) {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
    opacity: 1;
    
    &:hover {
      transform: none;
    }
  }
  
  /* Print styles */
  @media print {
    color: black !important;
    text-shadow: none;
    font-size: 14pt;
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;
