import styled from 'styled-components';

export const NavbarStyled = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    backdrop-filter: blur(20px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
    z-index: 1000;
    transition: all 0.3s ease;
    
    &.scrolled {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
        box-shadow: ${({ theme }) => theme.shadows.md};
        backdrop-filter: blur(20px);
    }
    
    @supports not (backdrop-filter: blur(20px)) {
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        
        &.scrolled {
            background: ${({ theme }) => theme.colors.backgroundSecondary};
        }
    }
`;

export const NavbarContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    }
`;

export const DesktopNav = styled.div`
    display: none;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.lg};
    }
`;

export const MobileNav = styled.div`
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    transform: translateY(${({ $isOpen }) => $isOpen ? '0' : '-100%'});
    opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const ThemeToggle = styled.button`
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.borderDefault};
    border-radius: 50px;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xs};
    min-width: 44px;
    min-height: 44px;
    
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
        border-color: ${({ theme }) => theme.colors.brandPrimary};
        transform: scale(1.05);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
        outline-offset: 2px;
    }
    
    .theme-icon {
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .theme-text {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        white-space: nowrap;
        
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
        }
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;