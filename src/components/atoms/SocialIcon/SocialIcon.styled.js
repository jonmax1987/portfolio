import styled from 'styled-components';

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}15;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }
  
  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
  
  ${({ $isMobile, theme }) => $isMobile && `
    width: 3rem;
    height: 3rem;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    margin-bottom: 0.5rem;
    
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.primaryContrast};
      border-color: ${theme.colors.primary};
    }
    
    svg {
      font-size: 1.5rem;
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 2.2rem;
    height: 2.2rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;
