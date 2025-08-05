import styled from "styled-components";

export const NavLinksListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    
    /* Default horizontal layout */
    flex-direction: ${({ $isVertical }) => $isVertical ? 'column' : 'row'};  // ✅ השתמש ב-$isVertical
    
    li {
        display: flex;
        align-items: center;
    }
    
    /* Responsive behavior */
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.sm};
        width: 100%;
        
        li {
            width: 100%;
            
            a {
                width: 100%;
                text-align: center;
                padding: ${({ theme }) => theme.spacing.md};
            }
        }
    }
    
    /* Vertical variant styling */
    &.vertical {
        flex-direction: column;
        align-items: stretch;
        
        li {
            width: 100%;
        }
    }
    
    /* Horizontal variant styling */
    &.horizontal {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            justify-content: flex-end;
        }
    }
`;