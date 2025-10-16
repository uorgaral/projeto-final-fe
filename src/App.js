import styled from 'styled-components';


import BoasVindas from './pages/telasPublicas/Inicio'
import Header from './pages/telasPublicas/Header';
import Footer from './pages/telasPublicas/Footer';
import PaginaInicial from './pages/telasPublicas/PaginaInicial'
import Login from './pages/telasPublicas/Login'
import Sobre from './pages/telasPublicas/Sobre'
import Blog from './pages/telasPublicas/Blog'
import AddBlog from './pages/telasPrivadas/AddBlog'
import './App.css'

import "@fontsource/style-script"; // título Nome
import "@fontsource/chicle"; // título Páginas
import "@fontsource-variable/fredoka"; // subtitulo
import "@fontsource/be-vietnam-pro"; // textos menores


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
        <AddBlog/>
      </ContentWrapper>
      <Footer />
    </MainContainer>
    
  )
}

export default App;
