
import { Component } from 'react';
import { Event } from '../util/Event';

const routes = [
  { name: 'Inicio',  url: 'home' },
  { name: 'PVP', url: 'pvp' },
  { name: 'Items', url: 'items' },
  { name: 'Recompensas', url: 'rewards' },
  { name: 'Modo In-Game', url: 'mode_in_game' },
  { name: 'Sobre la app', url: 'abaut' }
];

class Nav extends Component {
  constructor(){
    super();
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('selected'))
      .forEach(x=>x.classList.remove('selected'));
    
    if(e.target.tagName=='SPAN'){ 
      e.target.parentNode.classList.add('selected')
      Event.emit('changeTab', { tab:e.target.dataset.to })
    }
    
  }

  render() {
    return (
      <nav className="Nav">
        <ul className="ul">
        {
          routes.map((l,k)=>
            <li className="Li sub-ttl" key={k}>
              <span data-to={l.url} 
                className="Deep" 
                onClick={this.selectTab}>{l.name}
              </span>
            </li>)
        }
        </ul>
      </nav>
    );
  }
}

export default Nav;