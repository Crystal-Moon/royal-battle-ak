import React, { Component } from 'react';
//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal-mini.css';

// Components
import PrincipalMini from "./components/PrincipalMini";
import LeftBar from "./components/LeftBar";

class AppMini extends Component {
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

