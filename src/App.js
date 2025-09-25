import styled from 'styled-components';
import BoasVindas from './pages/telasPublicas/Inicio'
import Header from './pages/telasPublicas/Header';
import Footer from './pages/telasPublicas/Footer';
import PaginaInicial from './pages/telasPublicas/PaginaInicial'
import './App.css'
import "@fontsource-variable/fredoka"; // 
import "@fontsource/style-script"; // título principal

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;


function App() {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <PaginaInicial/>
      </ContentWrapper>
      <Footer />
    </MainContainer>
  )
}

export default App;
