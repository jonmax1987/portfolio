import styled from 'styled-components';

/**
 * Professional Header - Styled Components
 * Features: Sticky navigation, glassmorphism, smooth transitions, responsive design
 */

export const HeaderContainer = styled.header`
  /* Sticky positioning for professional navigation */
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
  
  /* Glassmorphism effect */
  background: ${({ theme, $isScrolled }) => 
    $isScrolled 
      ? `${theme.colors.backgroundPrimary}ee`
      : theme.colors.backgroundPrimary
  };
  backdrop-filter: ${({ $isScrolled }) => $isScrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary}33;
  
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Flexbox for content alignment */
  display: flex;
  align-items: center;
  
  /* Shadow for depth */
  box-shadow: ${({ theme, $isScrolled }) => 
    $isScrolled ? theme.shadows.md : theme.shadows.sm
  };
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

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brandPrimary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.brandHover};
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
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
  
  /* Mobile Navigation - Full screen overlay */
  ${({ $isMobile, theme }) => $isMobile && `
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${theme.colors.backgroundPrimary}dd;
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: ${theme.spacing.xl};
    overflow-y: auto;
    
    /* Center the content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none; /* Hide mobile menu on desktop */
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
  
  /* Mobile Navigation - Vertical layout with spacing */
  ${({ $isMobile }) => $isMobile && `
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    max-width: 300px;
    width: 100%;
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  
  /* Mobile Navigation - Large, prominent buttons */
  ${({ $isMobile, theme }) => $isMobile && `
    display: block;
    text-align: center;
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semiBold};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.backgroundSecondary};
    border: 2px solid ${theme.colors.borderPrimary};
    border-radius: ${theme.borderRadius.lg};
    width: 100%;
    min-width: 200px;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: ${theme.colors.brandPrimary};
      border-color: ${theme.colors.brandPrimary};
      color: ${theme.colors.white};
      transform: translateY(-2px);
    }
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  /* Active state */
  ${({ $isActive }) => $isActive && `
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: ${({ theme }) => theme.colors.brandPrimary};
      border-radius: 50%;
    }
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
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
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover svg {
    transform: rotate(180deg);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 44px;
    height: 44px;
    
    svg {
      width: 18px;
      height: 18px;
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

export const MobileMenuToggle = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  svg {
    width: 28px;
    height: 28px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MobileNavItem = styled.li``;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.md};
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
`;

export const SocialLinks = styled.div`
  display: none;
  
  /* Mobile Navigation - Show as horizontal list at bottom */
  ${({ $isMobile, theme }) => $isMobile && `
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xxl};
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -${theme.spacing.xl};
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: ${theme.colors.borderPrimary};
    }
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
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  /* Mobile Navigation - Glassmorphism social buttons */
  ${({ $isMobile, theme }) => $isMobile && `
    padding: ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.xxl};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.backgroundSecondary};
    border: 2px solid ${theme.colors.borderPrimary};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    
    svg {
      width: 28px;
      height: 28px;
    }
    
    &:hover {
      background: ${theme.colors.brandPrimary};
      border-color: ${theme.colors.brandPrimary};
      color: ${theme.colors.white};
      transform: translateY(-3px) scale(1.05);
    }
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const MobileSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const MobileSocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;
