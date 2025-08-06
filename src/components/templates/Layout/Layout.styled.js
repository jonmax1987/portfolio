import styled from 'styled-components';

/**
 * Layout Template - Styled Components
 * Features: Main layout structure, theme container, responsive grid
 */

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: background-color ${({ theme }) => theme.transitions.medium};
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
  flex: 1;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  
  /* Ensure proper spacing from navigation */
  padding-top: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const ThemeToggleContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  z-index: ${({ theme }) => theme.zIndex.overlay};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.brandPrimary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover svg {
    transform: rotate(180deg);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 56px;
    height: 56px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border-width: 3px;
    
    &:focus-visible {
      outline-width: 3px;
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: background-color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      transform: none;
    }
    
    svg {
      transition: none;
    }
    
    &:hover svg {
      transform: none;
    }
  }
`;
