import BoasVindas from './pages/telasPublicas/Inicio'
import Header from './pages/telasPublicas/Header';
import Footer from './pages/telasPublicas/Footer';
import PaginaInicial from './pages/telasPublicas/PaginaInicial'
import './App.css'
import "@fontsource-variable/playwrite-us-modern";
import "@fontsource-variable/fredoka"; 
import "@fontsource/lexend";
import "@fontsource/style-script";
import "@fontsource/lobster";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="Content">
        <PaginaInicial/>
      </main>
      <Footer />
    </div>
  )
}

export default App;
