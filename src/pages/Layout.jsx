import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    background: #282c34;
    padding: 1rem;
    color: white;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const Main = styled.main`
    flex: 1;
    padding: 2rem;
`;

const Footer = styled.footer`
    background: #282c34;
    padding: 1rem;
    color: white;
    text-align: center;
    border-top: 1px solid #ccc;
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header>
                <Title>My Portfolio</Title>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <p>&copy; 2023 My Portfolio</p>
            </Footer>
        </Container>
    );
};

export default Layout;
