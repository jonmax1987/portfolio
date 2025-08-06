import styled, { keyframes, css } from 'styled-components';

// Animation keyframes
const heroEntrance = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const scrollBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

/**
 * Main hero section container
 * Features: Grid-aware viewport height, responsive design, theme support
 */
export const HeroSectionStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  /* Grid-aware height calculation */
  min-height: ${({ $fullHeight, theme }) => 
    $fullHeight 
      ? `calc(100vh - ${theme.layout.headerHeight.mobile})`
      : `calc(80vh - ${theme.layout.headerHeight.mobile})`
  };
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ $fullHeight, theme }) => 
      $fullHeight 
        ? `calc(100vh - ${theme.layout.headerHeight.tablet})`
        : `calc(85vh - ${theme.layout.headerHeight.tablet})`
    };
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: ${({ $fullHeight, theme }) => 
      $fullHeight 
        ? `calc(100vh - ${theme.layout.headerHeight.desktop})`
        : `calc(90vh - ${theme.layout.headerHeight.desktop})`
    };
  }
  
  overflow: hidden;
  
  /* Animation entrance */
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? heroEntrance : 'none'} 
             1.2s ease-out forwards;
  
  /* Theme-based styling */
  ${({ $theme, theme }) => {
    if ($theme === 'dark') {
      return css`
        background: ${theme.colors.backgroundPrimary};
        color: ${theme.colors.textPrimary};
      `;
    } else if ($theme === 'light') {
      return css`
        background: ${theme.colors.white};
        color: ${theme.colors.textPrimary};
      `;
    }
    // Auto theme uses CSS custom properties
    return css`
      background: var(--hero-bg, ${theme.colors.backgroundPrimary});
      color: var(--hero-text, ${theme.colors.textPrimary});
    `;
  }}
  
  /* Responsive height adjustments for short screens */
  @media (max-height: 600px) {
    min-height: ${({ $fullHeight }) => $fullHeight ? '100vh' : '500px'};
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

/**
 * Background layer with support for images, videos, and gradients
 */
export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  /* Background image with parallax */
  ${({ $backgroundImage, $scrollY }) => $backgroundImage && css`
    background-image: url(${$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transform: translateY(${$scrollY * 0.5}px);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-attachment: scroll;
      transform: none;
    }
  `}
  
  /* Custom gradient background */
  ${({ $backgroundGradient }) => $backgroundGradient && css`
    background: linear-gradient(
      ${$backgroundGradient.from || '135deg'},
      ${$backgroundGradient.colors?.join(', ') || 'transparent'}
    );
    background-size: 200% 200%;
    animation: ${gradientShift} 8s ease infinite;
  `}
  
  /* Default gradient if no background specified */
  ${({ $backgroundImage, $backgroundGradient, theme }) => 
    !$backgroundImage && !$backgroundGradient && css`
      background: linear-gradient(
        135deg,
        ${theme.colors.brandPrimary}10,
        ${theme.colors.brandSecondary || theme.colors.brandPrimary}20
      );
    `
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
  }
`;

/**
 * Overlay for improved text readability
 */
export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  
  /* Show overlay only when background exists */
  ${({ $hasBackground }) => $hasBackground && css`
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  `}
`;

/**
 * Main content container with proper responsive spacing
 */
export const HeroContainer = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth.content};
  margin: 0 auto;
  
  /* Theme-based responsive padding */
  padding: 0 ${({ theme }) => theme.layout.containerPadding.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.tablet};
    max-width: ${({ theme }) => theme.layout.maxWidth.wide};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.desktop};
  }
  
  /* Flexbox for content alignment */
  display: flex;
  flex-direction: column;
  align-items: ${({ $centered }) => $centered ? 'center' : 'flex-start'};
  justify-content: center;
  text-align: ${({ $centered }) => $centered ? 'center' : 'left'};
  
  /* Full height within section */
  min-height: 100%;
`;

/**
 * Scroll indicator with bounce animation
 */
export const HeroScrollIndicator = styled.button`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  transition: all ${({ theme }) => theme.transitions.medium};
  animation: ${float} 3s ease-in-out infinite;
  
  .scroll-arrow {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    animation: ${scrollBounce} 2s infinite;
  }
  
  .scroll-text {
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
    transform: translateX(-50%) translateY(-5px);
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  /* Hide on small screens */
  @media (max-height: 600px) {
    display: none;
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    .scroll-arrow {
      animation: none;
    }
    
    &:hover {
      transform: translateX(-50%);
    }
  }
`;

/**
 * Particle effects container
 */
export const HeroParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  
  /* Generate particles using CSS */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.brandPrimary}40;
    border-radius: 50%;
    animation: ${particleFloat} 15s linear infinite;
  }
  
  &::before {
    left: 20%;
    animation-delay: -5s;
    animation-duration: 20s;
  }
  
  &::after {
    left: 80%;
    animation-delay: -10s;
    animation-duration: 18s;
    background: ${({ theme }) => theme.colors.brandSecondary || theme.colors.brandPrimary}40;
  }
  
  /* Parallax movement */
  transform: translateY(${({ $scrollY }) => $scrollY * 0.3}px);
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
