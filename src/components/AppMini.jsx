
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Event } from '../util/Event';
import '../assets/css/royal-mini.css';

// Components
//import Header from './Header';
import Logo from './Logo';
import Config from './Config';
import AcordeonMenu from './AcordeonMenu';
import MapItems from './MapItems';

class AppMini extends Component {
  constructor(){
    super();
    this.changeZoom = this.changeZoom.bind(this)
    this.changeHover = this.changeHover.bind(this)
    this.state = {
      zoom: 100,
      nohover: 0
    }
    Event.on('changeZoom', this.changeZoom)
    Event.on('nohover', this.changeHover);
  }


  componentDidMount(){
  //  let SwitchInGame = document.getElementById('SwitchInGame');
  //  if(SwitchInGame){
  //    SwitchInGame.dataset.status='on'
  //    SwitchInGame.style.display='none';
  //  }
  //  Event.emit('changeTab', { tab: 'in_game' })
  }

  changeZoom({ zoom }){
    this.setState({ zoom })
  }

  changeHover({ active }){
    this.setState({ nohover: active })
  }

  render() {
    return (
      <div className={`TodoMini ${this.state.nohover?'no-hover':''}`} 
        style={ {fontSize: `${this.state.zoom/100}rem` } } >
       <Helmet>
          <link rel="stylesheet" type="text/css" href='/assets/css/mini.css' />
        </Helmet> 

        <div className="Header">
          <Logo/>
          <Config />
        </div>
        <AcordeonMenu />
        <MapItems />

      </div>
    
    );
  }
}

export default AppMini;