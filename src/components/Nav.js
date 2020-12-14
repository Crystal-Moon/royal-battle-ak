
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
    this.testWin = this.testWin.bind(this)
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('selected'))
      .forEach(x=>x.classList.remove('selected'));
    
    if(e.target.tagName=='A') 
      e.target.parentNode.classList.add('selected')
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
              <Link to={l.url} className="Deep" onClick={this.selectTab}>{l.name}</Link>
            </li>)
        }
        <button type='button' onClick={ this.testWin } >ventana</button>
        </ul>
      </nav>
    );
  }
}

export default Nav;