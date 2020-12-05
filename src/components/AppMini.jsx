import React, { Component } from 'react';
import { Event } from '../util/Event';

//import logo from './logo.svg';
import '../assets/css/gral.css';
import '../assets/css/royal-mini.css'; // no llamar para app comun

// Components
import PrincipalMini from "./PrincipalMini";
import LeftBar from "./LeftBar";

class AppMini extends Component {
	constructor(){
    super();
    this.changeZoom = this.changeZoom.bind(this)
    this.state = {
      zoom: 100
    }
    Event.on('zoom', this.changeZoom)
  }

/*
  componentDidMount(){
  
    
  }
*/
  changeZoom(zoom){
    //let z = zoom / 100
    this.setState({ zoom })
  }

  render() {
    return (
      <div className="TodoMini" style={ {fontSize: `${this.state.zoom/100}rem` } } >
        <PrincipalMini></PrincipalMini>
        <LeftBar></LeftBar>
      </div>
    
    );
  }
}

export default AppMini;

