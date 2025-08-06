import styled from 'styled-components';

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  ${({ $isMobile, theme }) => $isMobile && `
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 0;
    border-top: 1px solid ${theme.colors.border};
    margin-top: 1rem;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.25rem;
  }
`;
