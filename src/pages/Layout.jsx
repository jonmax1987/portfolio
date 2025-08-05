import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar';

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 100vw;
    }
`;

const Header = styled.header`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg};
        box-shadow: ${({ theme }) => theme.shadows.sm};
    }
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    margin: 0;
    color: ${({ theme }) => theme.colors.brandPrimary};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    }
`;

const Main = styled.main`
    
    flex: 1;
    padding: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: ${({ theme }) => theme.spacing.lg};
    }

    /* Desktop and up */
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: ${({ theme }) => theme.spacing.xl};
    }
`;

const Footer = styled.footer`
    
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg};
        box-shadow: ${({ theme }) => theme.shadows.sm};
    }
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>{children}</Main>
            <Footer>
                <p>&copy; 2023 My Portfolio</p>
            </Footer>
        </Container>
    );
};

export default Layout;
