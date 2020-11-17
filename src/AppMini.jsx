import React, { Component } from 'react';
//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal-mini.css'; // no llamar para app comun

// Components
import PrincipalMini from "./components/PrincipalMini";
import LeftBar from "./components/LeftBar";

class AppMini extends Component {
	
  componentDidMount(){
  	
  	//require('./assets/css/themes/nowa.css'); //funciona genial :D
  }

  render() {
    return (
      <div className="Todo">
        <PrincipalMini></PrincipalMini>
        <LeftBar></LeftBar>
      </div>
    );
  }
}

export default AppMini;

