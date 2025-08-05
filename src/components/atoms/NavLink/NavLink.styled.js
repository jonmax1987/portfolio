import styled from "styled-components";

export const NavLinkStyled = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius?.sm || '4px'};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    /* Default state */
    &:hover {
        color: ${({ theme }) => theme.colors.brandPrimary};
        background-color: ${({ theme }) => theme.colors.backgroundSecondary || 'rgba(255,255,255,0.05)'};
        transform: translateY(-2px);
    }
    
    /* Active state */
    &.active {
        color: ${({ theme }) => theme.colors.brandPrimary};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        background-color: ${({ theme }) => theme.colors.backgroundSecondary || 'rgba(255,255,255,0.1)'};
    }
    
    /* Animated underline */
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
            90deg, 
            ${({ theme }) => theme.colors.brandPrimary}, 
            ${({ theme }) => theme.colors.brandSecondary || theme.colors.brandPrimary}
        );
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }
    
    &:hover::before,
    &.active::before {
        transform: scaleX(1);
    }
    
    /* Focus state for accessibility */
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
        outline-offset: 2px;
    }
    
    /* Mobile responsiveness */
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        
        &:hover {
            transform: none; /* Remove hover lift on mobile */
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
    }
`;