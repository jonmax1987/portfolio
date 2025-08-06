import styled, { keyframes } from 'styled-components';

// Animation keyframes
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/**
 * Main container for hero content
 * Features: Responsive layout, animation orchestration, accessibility
 */
export const HeroContentStyled = styled.div`
  /* Base layout */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  
  /* Animation */
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
  
  /* Centered layout option */
  ${({ $centered }) => $centered && `
    align-items: center;
    text-align: center;
  `}
  
  /* Responsive design - Mobile First */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
    max-width: 90%;
    
    ${({ $centered }) => !$centered && `
      align-items: flex-start;
      text-align: left;
    `}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    max-width: 80%;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 70%;
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

/**
 * Inner container for content organization
 */
export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 100%;
  
  /* Animation stagger effect */
  > * {
    animation-fill-mode: both;
  }
  
  /* Responsive spacing */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.spacing.xxl};
    max-width: 90%;
  }
`;

/**
 * Container for action buttons
 */
export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  
  /* Animation */
  opacity: 0;
  animation: ${slideInFromLeft} 0.8s ease-in-out 0.6s forwards;
  
  /* Responsive layout */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.lg};
    width: auto;
    
    /* Adjust based on number of actions */
    ${({ $actionsCount }) => $actionsCount <= 2 && `
      justify-content: flex-start;
    `}
    
    ${({ $actionsCount }) => $actionsCount > 2 && `
      flex-wrap: wrap;
    `}
  }
  
  /* Button spacing and sizing */
  > * {
    flex-shrink: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      min-width: 200px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: auto;
      min-width: 160px;
    }
  }
  
  /* Centered layout adjustments */
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.tablet}) {
      .hero-content-centered & {
        justify-content: center;
      }
    }
  `}
  
  /* Focus management for button group */
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
  
  /* High contrast support */
  @media (prefers-contrast: high) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  /* Print styles */
  @media print {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    
    > * {
      width: auto;
      min-width: auto;
    }
  }
`;
