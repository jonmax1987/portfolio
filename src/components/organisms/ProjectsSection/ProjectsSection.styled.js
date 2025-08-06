import styled, { keyframes } from 'styled-components';

/**
 * Projects Section - Styled Components
 * Features: Interactive filtering, hover effects, responsive masonry layout
 */

const _fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ProjectsContainer = styled.section`
  /* Flexbox section within main grid */
  position: relative;
  
  /* Mobile First approach with theme tokens */
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 120px 0;
  }
`;

export const ProjectsContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth.wide};
  margin: 0 auto;
  
  /* Theme-based responsive padding */
  padding: 0 ${({ theme }) => theme.layout.containerPadding.mobile};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.tablet};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.layout.containerPadding.desktop};
  }
`;

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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

export const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FilterTab = styled.button`
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.brandPrimary : theme.colors.backgroundSecondary};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.white : theme.colors.textPrimary};
  border: 2px solid ${({ theme, $isActive }) => 
    $isActive ? theme.colors.brandPrimary : theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.brandHover : theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.brandHover : theme.colors.brandPrimary};
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
  
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  
  /* Mobile First: Single column */
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.article`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.medium};
  
  /* Staggered animation */
  animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay}s both;
  
  /* Featured project styling */
  ${({ $featured, theme }) => $featured && `
    border: 2px solid ${theme.colors.brandPrimary};
    position: relative;
    
    &::before {
      content: 'Featured';
      position: absolute;
      top: ${theme.spacing.md};
      right: ${theme.spacing.md};
      background: ${theme.colors.brandPrimary};
      color: ${theme.colors.white};
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.sm};
      font-size: ${theme.typography.fontSize.xs};
      font-weight: ${theme.typography.fontWeight.bold};
      z-index: 2;
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.brandPrimary};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $featured }) => $featured && `
      grid-column: span 2;
    `}
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &:hover {
      transform: none;
    }
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  @media (prefers-reduced-motion: reduce) {
    &:hover img {
      transform: none;
    }
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.backgroundPrimary}dd;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.medium};
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ActionButton = styled.a`
  background: ${({ theme, $primary }) => 
    $primary ? theme.colors.brandPrimary : theme.colors.backgroundSecondary};
  color: ${({ theme, $primary }) => 
    $primary ? theme.colors.white : theme.colors.textPrimary};
  border: 2px solid ${({ theme, $primary }) => 
    $primary ? theme.colors.brandPrimary : theme.colors.borderPrimary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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

export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.body};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

export const ProjectTech = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.brandPrimary}20;
  color: ${({ theme }) => theme.colors.brandPrimary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.brandPrimary}30;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;
