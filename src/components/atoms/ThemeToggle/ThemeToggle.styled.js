import styled from 'styled-components';

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
  
  /* Mobile First: Start with smaller size */
  width: 2.2rem;
  height: 2.2rem;
  
  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }
  
  &:hover svg {
    transform: rotate(360deg);
  }
`;
