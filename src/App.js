import './App.css';
import Home from './Componentes/Home/Home';
import Menu from './Componentes/Menu/Menu';
import About from './Componentes/About/About';
import Servicio from './Componentes/Servicio/Servicio';
import Modal from './Componentes/Modal/Modal';
import Footer from './Componentes/Footer/Footer';
import Skill from './Componentes/Skill/Skill';
import Portafolio from './Componentes/Portafolio/Portafolio';
import Experiencia from './Componentes/Experiencia/Experiencia';
import Capacitaciones from './Componentes/Capacitaciones/Capacitaciones';
import Contactame from './Componentes/Contactame/Contactame';

function App() {
  return (
    <div>
      <Modal/>
      <div className="edrea_wrapper">
        <Menu/>
        <Home/>
        <About/>
        <Servicio/>
        <Skill/>
        <Portafolio/>
        <Capacitaciones/>
        <Contactame/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
