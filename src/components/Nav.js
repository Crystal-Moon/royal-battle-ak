import { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Component
//import Principal from './Principal';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="ul">
          <li data-compoent="Li" className="Li sub-ttl">
            <Link to='/' className="Deep"><span>Introduccion</span></Link>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <Link to='/pvp' className="Deep"><span>PVP</span></Link>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <Link to='/items' className="Deep"><span>Items</span></Link>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <Link to='/rewards' className="Deep"><span>Recompensas</span></Link>
          </li>
          <li data-compoent="Li" className="Li sub-ttl selected">
            <Link to='/mode_in_game' className="Deep"><span>Mode In-Game</span></Link>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <Link to='/abaut' className="Deep"><span>Sobre mi</span></Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

/*
      <nav className="Nav">
        <ul className="ul">
          <li data-compoent="Li" className="Li sub-ttl">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>Introduccion</span>
            </a>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>PVP</span>
            </a>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>Items</span>
            </a>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>Recompensas</span>
            </a>
          </li>
          <li data-compoent="Li" className="Li sub-ttl selected">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>Esta herramienta</span>
            </a>
          </li>
          <li data-compoent="Li" className="Li sub-ttl">
            <a href='#' title='' data-content="Deep" className="Deep">
              <span>Sobre mi</span>
            </a>
          </li>
        </ul>
      </nav>
*/