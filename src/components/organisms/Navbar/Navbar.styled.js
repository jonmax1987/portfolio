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
    
    /* Scrolled state */
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
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }
`;

export const DesktopNav = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
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
    gap: ${({ theme }) => theme.spacing.xs};
    
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
        border-color: ${({ theme }) => theme.colors.brandPrimary};
        transform: scale(1.05);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
        outline-offset: 2px;
    }
    
    span {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
        }
    }
`;