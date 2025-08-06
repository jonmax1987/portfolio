import styled from 'styled-components';

/**
 * App Layout - Professional Grid-Based Styled Components
 * Features: CSS Grid layout, responsive header heights, proper layering
 */

export const LayoutContainer = styled.div`
  /* Professional CSS Grid Layout */
  display: grid;
  grid-template-rows: auto 1fr; /* header, main content */
  min-height: 100vh;
  position: relative;
  
  /* Theme-based background */
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: background-color ${({ theme }) => theme.transitions.medium};
  
  /* Ensure proper stacking context */
  isolation: isolate;
`;

export const SkipNavigation = styled.a`
  position: absolute;
  top: -100px;
  left: 0;
  background: ${({ theme }) => theme.colors.brandPrimary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  z-index: ${({ theme }) => theme.zIndex.skipLink};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    top: 0;
    transform: none;
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
  
  &:hover:focus {
    background: ${({ theme }) => theme.colors.brandHover};
  }
`;

export const MainContent = styled.main`
  /* Padding to account for fixed header */
  padding-top: ${({ theme }) => theme.layout.headerHeight.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.layout.headerHeight.tablet};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.layout.headerHeight.desktop};
  }
  
  /* Layout properties */
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
  
  /* Flexbox for vertical section stacking */
  display: flex;
  flex-direction: column;
  
  /* Allow content to shrink and grow */
  min-height: 0;
  flex: 1;
  
  /* Ensure proper scrolling */
  overflow-x: hidden;
`;
