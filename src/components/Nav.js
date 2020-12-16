
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../util/Event';

const routes = [
  { name: 'Noticias',  url: 'home' },
  { name: 'PVP', url: 'pvp' },
  { name: 'Items', url: 'items' },
  { name: 'Recompnesas', url: 'rewards' },
  { name: 'Modo In-Game', url: 'mode_in_game' },
  { name: 'Sobre mí', url: 'abaut' },
  { name: 'test inGame', url: 'in_game' }
];

class Nav extends Component {
  constructor(){
    super();
    this.selectTab = this.selectTab.bind(this)
    this.testWin = this.testWin.bind(this)
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('selected'))
      .forEach(x=>x.classList.remove('selected'));
    
    if(e.target.tagName=='SPAN'){ 
      e.target.parentNode.classList.add('selected')
      Event.emit('changeTab', { tab:e.target.dataset.to })
    }
    
  }

  testWin(){
    console.log('en testW')
   // let ven = window.open('testpag/test_html.html', '_blank',
     //   'left=1200,top=0,height=420,width=320,menubar=no,toolbar=no,location=1,personalbar=no,z-lock=1,navigationtoolbar=no')
    let ven1 = window.open('./testpag/buildmini/index.html', '_blank',
      'left=1200,top=0,height=420,width=320,menubar=no,toolbar=no,location=1,personalbar=no,z-lock=1,navigationtoolbar=no')
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
        <button type='button' onClick={ this.testWin } >ventana</button>
        </ul>
      </nav>
    );
  }
}

export default Nav;