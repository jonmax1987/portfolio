import styled from 'styled-components';

export const HamburgerButtonStyled = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: all 0.3s ease;
    
    svg {
        width: 24px;
        height: 24px;
        transition: transform 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.brandPrimary};
        transform: scale(1.1);
    }
    
    ${({ isOpen }) => isOpen && `
        svg {
            transform: rotate(90deg);
        }
    `}
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
    }
`;