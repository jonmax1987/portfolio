import styled, { keyframes } from 'styled-components';

/**
 * About Section - Styled Components
 * Features: Animated entrance, responsive grid, glassmorphism cards
 */

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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const skillPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const AboutContainer = styled.section`
  /* Flexbox section within main grid */
  position: relative;
  overflow: hidden;
  
  /* Mobile First approach with theme tokens */
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 120px 0;
  }
  
  /* Background pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, ${({ theme }) => theme.colors.brandPrimary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${({ theme }) => theme.colors.brandSecondary || theme.colors.brandPrimary}15 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const AboutContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth.wide};
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  /* Theme-based responsive padding */
  padding: 0 ${({ theme }) => theme.layout.containerPadding.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.tablet};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.desktop};
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  justify-items: center; /* Centers grid items */
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  
  /* Mobile First: Single column */
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxxl};
    justify-items: stretch; /* Reset to stretch on desktop */
  }
`;

export const AboutText = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg} 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h2 {
      font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    }
    
    p {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    h2 {
      font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    }
  }
`;

export const AboutImage = styled.div`
  position: relative;
  animation: ${slideInRight} 0.8s ease-out 0.2s both;
  
  /* Perfect centering for all screen sizes */
  display: flex;
  justify-content: center;
  align-items: center;
  order: -1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 0;
    justify-content: center; /* Keep centered on desktop too */
  }
  
  img {
    width: 100%;
    max-width: 280px;
    height: 280px; /* Fixed height for better card appearance */
    object-fit: cover; /* Ensures image fills the area nicely */
    object-position: center; /* Centers the image content */
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transition: all ${({ theme }) => theme.transitions.medium};
    border: 4px solid ${({ theme }) => theme.colors.backgroundSecondary};
    
    &:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: ${({ theme }) => theme.shadows.xxl};
      border-color: ${({ theme }) => theme.colors.brandPrimary}40;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 320px;
      height: 320px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      max-width: 350px;
      height: 350px;
    }
  }
  
  /* Enhanced decorative card background */
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: linear-gradient(
      135deg, 
      ${({ theme }) => theme.colors.brandPrimary}20, 
      ${({ theme }) => theme.colors.brandSecondary}20,
      ${({ theme }) => theme.colors.brandPrimary}10
    );
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    z-index: -1;
    opacity: 0.8;
    transition: all ${({ theme }) => theme.transitions.medium};
  }
  
  /* Enhanced glow effect on hover */
  &:hover::before {
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    opacity: 1;
    background: linear-gradient(
      135deg, 
      ${({ theme }) => theme.colors.brandPrimary}30, 
      ${({ theme }) => theme.colors.brandSecondary}30,
      ${({ theme }) => theme.colors.brandPrimary}20
    );
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    img:hover {
      transform: none;
    }
    
    &:hover::before {
      transform: none;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* Mobile First: 2 columns */
  grid-template-columns: 1fr 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const SkillItem = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* Staggered animation */
  animation: ${fadeInUp} 0.6s ease-out ${({ $delay }) => $delay}s both;
  
  &:hover {
    background: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    animation: ${skillPulse} 0.6s ease-in-out;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &:hover {
      transform: none;
      animation: none;
    }
  }
`;

export const SkillIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.brandPrimary};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.1);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl || '2rem'};
  }
`;

export const SkillText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  
  /* Mobile First: 2x2 grid */
  grid-template-columns: 1fr 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Staggered animation */
  animation: ${fadeInUp} 0.8s ease-out ${({ $delay }) => $delay}s both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.brandPrimary};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &:hover {
      transform: none;
    }
  }
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brandPrimary};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  }
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;
