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
