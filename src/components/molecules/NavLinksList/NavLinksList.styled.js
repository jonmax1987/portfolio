import styled from "styled-components";

export const NavLinksListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    
    li {
        display: flex;
        align-items: center;
        width: 100%;
        
        a {
            width: 100%;
            text-align: center;
            padding: ${({ theme }) => theme.spacing.md};
        }
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: ${({ $isVertical }) => $isVertical ? 'column' : 'row'};
        align-items: center;
        justify-content: flex-end;
        gap: ${({ theme }) => theme.spacing.md};
        width: auto;
        
        li {
            width: auto;
            
            a {
                width: auto;
                text-align: left;
                padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
            }
        }
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: ${({ theme }) => theme.spacing.lg};
    }
    
    &.vertical {
        flex-direction: column;
        align-items: stretch;
        
        li {
            width: 100%;
        }
    }
    
    &.horizontal {
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            flex-direction: row;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    }
`;