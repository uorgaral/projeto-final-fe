import styled from 'styled-components';
import BoasVindas from './pages/telasPublicas/Inicio'
import Header from './pages/telasPublicas/Header';
import Footer from './pages/telasPublicas/Footer';
import PaginaInicial from './pages/telasPublicas/PaginaInicial'
import Login from './pages/telasPublicas/Login'
import './App.css'
import "@fontsource-variable/fredoka"; // textos menores
import "@fontsource/style-script"; // título principal

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #fdf7f1ff;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;


function App() {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <Login/>
      </ContentWrapper>
      <Footer />
    </MainContainer>
  )
}

export default App;
