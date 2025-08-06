import styled from 'styled-components';

export const BackToTopButtonStyled = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  z-index: ${({ theme }) => theme.zIndex.floating || 999};
  
  /* Button Design */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  /* Theme Colors */
  background: ${({ theme }) => theme.colors.brandPrimary};
  color: ${({ theme }) => theme.colors.white};
  
  /* Glassmorphism Effect */
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  /* Icon */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  
  /* Animations */
  transition: all ${({ theme }) => theme.transitions.medium};
  animation: fadeInUp 0.5s ease-out;
  
  /* Hover Effects */
  &:hover {
    background: ${({ theme }) => theme.colors.brandHover || theme.colors.brandPrimary};
    transform: translateY(-3px) scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  /* Focus for Accessibility */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: 4px;
  }
  
  /* Mobile Responsive */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 45px;
    height: 45px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
  
  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
    
    &:hover {
      transform: none;
    }
  }
  
  /* Fade in animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
