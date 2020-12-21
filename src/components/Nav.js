import { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Inicio',  url: '/home' },
  { name: 'PVP', url: '/pvp' },
  { name: 'Items', url: '/items' },
  { name: 'Recompensas', url: '/rewards' },
  { name: 'Modo In-Game', url: '/mode_in_game' },
  { name: 'Sobre la app', url: '/abaut' }
];

class Nav extends Component {
  constructor(){
    super();
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('selected'))
      .forEach(x=>x.classList.remove('selected'));
    
    if(e.target.tagName=='A'){ 
      e.target.parentNode.classList.add('selected')
      //Event.emit('changeTab', { tab:e.target.dataset.to })
    }
    
  }

  render() {
    return (
      <nav className="Nav">
        <ul className="ul">
        {
          routes.map((l,k)=>
            <li className="Li sub-ttl" key={k}>
              <Link to={l.url} 
                className="Deep" 
                onClick={this.selectTab}>{l.name}
              </Link>
            </li>)
        }
        </ul>
      </nav>
    );
  }
}

export default Nav;
/*
<li data-compoent="Li" className="Li sub-ttl">
            <Link to='/' className="Deep"><span>Introduccion</span></Link>
          </li>
          */
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