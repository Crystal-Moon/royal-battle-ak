
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Event } from '../util/Event';

//import logo from './logo.svg';
//import '../assets/css/gral.css';
//import '../assets/css/royal-mini.css'; // no llamar para app comun

// Components
import PrincipalMini from "./PrincipalMini";
import LeftBar from "./LeftBar";

class AppMini extends Component {
	constructor(){
    super();
    this.changeZoom = this.changeZoom.bind(this)
    this.state = {
      style: {
        fontSize: '1rem'
      }
    }
    Event.on('changeZoom', this.changeZoom)
    //Event.on('inGame')
  }


  componentDidMount(){
    let SwitchInGame = document.getElementById('SwitchInGame');
    if(SwitchInGame){
      SwitchInGame.dataset.status='on'
      SwitchInGame.style.display='none';
    }
    //require('./assets/css/themes/nowa.css'); //funciona genial :D
  }

  changeZoom({ zoom }){
    let z = zoom / 100
    this.setState({ style:{ fontSize:`${z}rem`}})
  }

  render() {
    return (
      <div className="TodoMini" style={ this.state.style } >
        <Helmet>
          <link rel="stylesheet" type="text/css" href={`/assets/css/royal-mini.css`} />
        </Helmet>

        <PrincipalMini></PrincipalMini>
        <LeftBar></LeftBar>
      </div>
    
    );
  }
}

export default AppMini;

