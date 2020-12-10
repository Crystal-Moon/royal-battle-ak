import { Component } from 'react';
import logo from '../assets/imgs/logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img src={logo} alt="logo" />
        <h1>NOMBRE APPLICATION</h1>
      </div>
    );
  }
}

export default Logo;


/*
.Logo{
	height: 2em;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0.5em;
}
.Logo img{ height: 2em; }
    */