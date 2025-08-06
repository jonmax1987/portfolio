import styled from "styled-components";

export const NavLinksListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    
    li {
        display: flex;
        align-items: center;
    }
    
    /* Mobile styles */
    ${({ $isMobile, theme }) => $isMobile && `
        flex-direction: column;
        align-items: stretch;
        gap: ${theme.spacing.sm};
        width: 100%;
        
        li {
            width: 100%;
            
            a {
                width: 100%;
                text-align: center;
                padding: ${theme.spacing.md};
                justify-content: center;
            }
        }
    `}
    
    /* Desktop styles */
    ${({ $isMobile }) => !$isMobile && `
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none; /* Hide desktop nav on mobile */
        }
    `}
    
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: ${({ theme }) => theme.spacing.lg};
    }
`;