import { Component } from 'react';

class Nav extends Component {
  render() {
    return (
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
    );
  }
}

export default Nav;
