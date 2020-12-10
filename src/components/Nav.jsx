
import { Component } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Noticias',  url: '/' },
  { name: 'PVP', url: '/pvp' },
  { name: 'Items', url: '/items' },
  { name: 'Recompnesas', url: '/rewards' },
  { name: 'Modo In-Game', url: '/mode_in_game' },
  { name: 'Sobre mí', url: '/abaut' }
];

class Nav extends Component {
  constructor(){
    super();
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('selected'))
      .forEach(x=>x.classList.remove('selected'));
    
    if(e.target.tagName=='A') 
      e.target.parentNode.classList.add('selected')
  }

  render() {
    return (
      <nav className="Nav">
        <ul className="ul">
        {
          routes.map((l,k)=>
            <li className="Li sub-ttl" key={k}>
              <Link to={l.url} className="Deep" onClick={this.selectTab}>{l.name}</Link>
            </li>)
        }
        </ul>
      </nav>
    );
  }
}

export default Nav;
