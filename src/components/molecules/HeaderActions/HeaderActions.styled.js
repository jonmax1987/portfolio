import styled from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  
  /* Mobile First: Start with smallest gap */
  gap: 0.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem;
  }
`;
