import React, {useState} from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css";

import Gatos from '../gatos-container/GatosColection';
import Perdidos from '../perdidos/PerdidosColection';
import Home from '../home/home'
import Doacoes from '../doacoes/doacoes';
import Contato from '../contato/contato';
import Events from '../eventos/events';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="nav-list">
        <ul className={`nav-ul ${showMenu ? 'responsive' : ''}`}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Quem Somos?</Link>
          </li>
          <li className="nav-item">
            <Link to="gatos" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Adoção</Link>
          </li>
          <li className="nav-item">
            <Link to="perdidos" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Animais Perdidos</Link>
          </li>
          <li className="nav-item">
            <Link to="doaçoes" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Doações</Link>
          </li>
          <li className="nav-item">
            <Link to="events" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Eventos</Link>
          </li>
          <li className="nav-item">
            <Link to="contato" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Contato</Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

const Navbar1 = () => (
  <div>
    <Navbar />
    <div id="home">
      <div className="">
        <Home />
      </div>
    </div>
    <div id="gatos">
      <div className="adopt-content">
        <h3 className="adopt-title">Adoção</h3>
        <Gatos />
      </div>
    </div>
    <div id="perdidos">
      <h3 className="perdidos-title">Animais Perdidos</h3>
      <Perdidos />
    </div>
    <div id="doaçoes">
        <Doacoes />
    </div>
    <div className="events" id="events">
        <Events />
    </div>
    <div className="contato" id="contato">
        <Contato />
    </div>
  </div>
);

export default Navbar1;
