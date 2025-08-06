import styled from "styled-components";

export const NavLinkStyled = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius?.sm || '8px'};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    
    /* Active state */
    ${({ $isActive, theme }) => $isActive && `
        color: ${theme.colors.primary};
        font-weight: ${theme.typography.fontWeight.bold};
        background-color: ${theme.colors.primary}15;
    `}
    
    /* Animated underline for desktop */
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.primary};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }
    
    /* Default hover */
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.primary}10;
    }
    
    &:hover::before,
    ${({ $isActive }) => $isActive && '&::before'} {
        transform: scaleX(1);
    }
    
    /* Focus state for accessibility */
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
    
    /* Mobile styles */
    ${({ $isMobile, theme }) => $isMobile && `
        width: 100%;
        justify-content: center;
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: ${theme.typography.fontSize.lg};
        border-radius: ${theme.borderRadius?.md || '12px'};
        margin-bottom: ${theme.spacing.xs};
        
        &:hover {
            background-color: ${theme.colors.primary}20;
            transform: none;
        }
        
        &::before {
            display: none; /* No underline on mobile */
        }
    `}
    
    /* Desktop hover effects */
    ${({ $isMobile }) => !$isMobile && `
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            &:hover {
                transform: translateY(-2px);
            }
        }
    `}
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        ${({ $isMobile }) => !$isMobile && 'display: none;'} /* Hide desktop nav on mobile */
    }
`;