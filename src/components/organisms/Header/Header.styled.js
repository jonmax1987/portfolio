import styled from 'styled-components';

/**
 * Professional Header - Styled Components
 * Features: Sticky navigation, glassmorphism, smooth transitions, responsive design
 */

export const HeaderContainer = styled.header`
  /* Professional sticky navigation */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  
  /* Responsive height using theme tokens */
  height: ${({ theme }) => theme.layout.headerHeight.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.layout.headerHeight.tablet};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: ${({ theme }) => theme.layout.headerHeight.desktop};
  }
  
  /* Advanced glassmorphism effect */
  background: ${({ theme, $isScrolled }) => 
    $isScrolled 
      ? `${theme.colors.backgroundPrimary}f0`
      : `${theme.colors.backgroundPrimary}f8`
  };
  backdrop-filter: blur(${({ $isScrolled }) => $isScrolled ? '20px' : '12px'});
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary}${({ $isScrolled }) => $isScrolled ? '66' : '33'};
  
  /* Smooth transitions */
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Flexbox for content alignment */
  display: flex;
  align-items: center;
  
  /* Professional shadow with scroll effect */
  box-shadow: ${({ theme, $isScrolled }) => 
    $isScrolled 
      ? `0 8px 32px ${theme.colors.backgroundPrimary}40, 0 4px 16px ${theme.colors.borderPrimary}20`
      : `0 2px 8px ${theme.colors.borderPrimary}10`
  };
  
  /* Ensure content doesn't overflow */
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; /* Fill header height */
  
  /* Mobile First responsive padding using theme tokens */
  padding: 0 ${({ theme }) => theme.layout.containerPadding.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.tablet};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.desktop};
  }
`;

export const Navigation = styled.nav`
  /* Desktop Navigation - Hidden by default, shown on larger screens */
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  /* Mobile Navigation - Modern dropdown style */
  ${({ $isMobile, theme }) => $isMobile && `
    position: fixed;
    top: ${theme.layout.headerHeight.mobile};
    right: ${theme.spacing.lg};
    width: 320px;
    max-width: calc(100vw - ${theme.spacing.xl});
    max-height: calc(100vh - ${theme.layout.headerHeight.mobile} - ${theme.spacing.xl});
    
    /* Modern glassmorphism background */
    background: ${theme.colors.backgroundPrimary}f5;
    backdrop-filter: blur(20px);
    border: 1px solid ${theme.colors.borderPrimary}40;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: 
      0 20px 40px ${theme.colors.backgroundPrimary}30,
      0 8px 24px ${theme.colors.borderPrimary}20,
      inset 0 1px 0 ${theme.colors.borderPrimary}20;
    
    /* Modern z-index */
    z-index: ${theme.zIndex.dropdown};
    
    /* Content layout */
    padding: ${theme.spacing.xl};
    overflow-y: auto;
    
    /* Smooth scroll */
    scroll-behavior: smooth;
    
    /* Modern entrance animation */
    animation: slideInFromTop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: top right;
    
    @keyframes slideInFromTop {
      0% {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Responsive adjustments */
    @media (min-width: ${theme.breakpoints.tablet}) {
      top: ${theme.layout.headerHeight.tablet};
      width: 350px;
    }
    
    @media (min-width: ${theme.breakpoints.desktop}) {
      top: ${theme.layout.headerHeight.desktop};
      display: none; /* Hide mobile menu on desktop */
    }
    
    /* Mobile portrait optimization */
    @media (max-width: 480px) {
      right: ${theme.spacing.md};
      left: ${theme.spacing.md};
      width: auto;
      max-width: none;
    }
  `}
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
  
  /* Mobile Navigation - Modern vertical layout */
  ${({ $isMobile, theme }) => $isMobile && `
    flex-direction: column;
    align-items: stretch;
    gap: ${theme.spacing.sm};
    width: 100%;
    margin-bottom: ${theme.spacing.lg};
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  /* Base styling */
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  letter-spacing: 0.01em;
  
  /* Modern hover underline effect */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: calc(100% - ${({ theme }) => theme.spacing.md});
    height: 2px;
    background: linear-gradient(
      90deg, 
      ${({ theme }) => theme.colors.brandPrimary}, 
      ${({ theme }) => theme.colors.brandSecondary || theme.colors.brandPrimary}
    );
    border-radius: 1px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  /* Mobile Navigation - Modern compact buttons */
  ${({ $isMobile, theme }) => $isMobile && `
    display: block;
    width: 100%;
    text-align: left;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.textPrimary};
    background: transparent;
    border: 1px solid ${theme.colors.borderPrimary}20;
    border-radius: ${theme.borderRadius.lg};
    transition: all ${theme.transitions.fast};
    position: relative;
    
    &::before {
      display: none;
    }
    
    /* Modern hover effect */
    &:hover {
      background: ${theme.colors.brandPrimary}10;
      border-color: ${theme.colors.brandPrimary}40;
      color: ${theme.colors.brandPrimary};
      transform: translateX(4px);
    }
    
    /* Active state */
    &:active {
      transform: translateX(2px);
    }
  `}
  
  /* Desktop hover effects */
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary}80;
    transform: translateY(-1px);
    
    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  /* Active state with enhanced styling */
  ${({ $isActive, theme }) => $isActive && `
    color: ${theme.colors.brandPrimary};
    background: ${theme.colors.backgroundSecondary}aa;
    font-weight: ${theme.typography.fontWeight.semiBold};
    
    &::before {
      transform: translateX(-50%) scaleX(1);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: ${theme.colors.brandPrimary};
      border-radius: 50%;
      opacity: 0.8;
    }
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ThemeToggleButton = styled.button`
  /* Modern glassmorphism design */
  background: ${({ theme }) => theme.colors.backgroundSecondary}cc;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary}66;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(12px);
  
  /* Professional transitions */
  transition: all ${({ theme }) => theme.transitions.fast};
  
  /* Enhanced hover effects */
  &:hover {
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.brandPrimary};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.brandPrimary}40;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 3px;
  }
  
  /* Icon styling */
  svg {
    width: 20px;
    height: 20px;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover svg {
    transform: rotate(180deg) scale(1.1);
  }
  
  /* Responsive sizing */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 52px;
    height: 52px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
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

export const SocialLinks = styled.div`
  display: none;
  
  /* Mobile Navigation - Modern compact layout */
  ${({ $isMobile, theme }) => $isMobile && `
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.lg};
    padding-top: ${theme.spacing.lg};
    margin-top: ${theme.spacing.lg};
    border-top: 1px solid ${theme.colors.borderPrimary}30;
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    
    /* Hide mobile styles on desktop */
    ${({ $isMobile }) => $isMobile && `
      display: none;
    `}
  }
`;

export const SocialLink = styled.a`
  /* Base styling for desktop */
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  
  /* Mobile Navigation - Simplified social buttons */
  ${({ $isMobile, theme }) => $isMobile && `
    padding: ${theme.spacing.md};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.backgroundSecondary}80;
    border: 1px solid ${theme.colors.borderPrimary}40;
    border-radius: ${theme.borderRadius.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 20px;
      height: 20px;
    }
    
    &:hover {
      background: ${theme.colors.brandPrimary};
      border-color: ${theme.colors.brandPrimary};
      color: ${theme.colors.white};
      transform: translateY(-2px);
    }
  `}
  
  /* Desktop hover effects */
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary}aa;
    transform: translateY(-2px);
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  /* Icon sizing for desktop */
  svg {
    width: 20px;
    height: 20px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover svg {
    transform: scale(1.15);
  }
  
  @media (prefers-reduced-motion: reduce) {
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
