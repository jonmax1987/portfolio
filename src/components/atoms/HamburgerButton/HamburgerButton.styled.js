import styled from 'styled-components';

export const HamburgerButtonStyled = styled.button`
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: all 0.3s ease;
    
    svg {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.brandPrimary};
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
        outline-offset: 2px;
    }
    
    ${({ $isOpen }) => $isOpen && `
        svg {
            transform: rotate(90deg);
        }
    `}
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
        
        svg {
            width: 24px;
            height: 24px;
        }
        
        &:hover {
            transform: scale(1.1);
        }
    }
`;