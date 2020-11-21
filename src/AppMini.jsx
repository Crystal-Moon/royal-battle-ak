import React, { Component } from 'react';
import { Event } from './util/Event';

//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal-mini.css'; // no llamar para app comun

// Components
import PrincipalMini from "./components/PrincipalMini";
import LeftBar from "./components/LeftBar";

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
  }


  componentDidMount(){
    
    //require('./assets/css/themes/nowa.css'); //funciona genial :D
  }

  changeZoom({ zoom }){
    let z = zoom / 100
    this.setState({ style:{ fontSize:`${z}rem`}})
  }

  render() {
    return (
      <div className="Todo" style={ this.state.style } >
        <PrincipalMini></PrincipalMini>
        <LeftBar></LeftBar>
      </div>
    );
  }
}

export default AppMini;

