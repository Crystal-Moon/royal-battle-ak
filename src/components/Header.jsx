import { Component } from 'react';
import Logo from "./Logo";
import Switch from "./Switch";
import Config from './Config';

class Header extends Component {
  render() {
    const inGameProp = { displayName: 'In-game', active: false }
    return (
      <div className="Header">
        <Logo></Logo>
        <Switch userProp={ inGameProp } />
        <Config />
      </div>
    );
  }
}

export default Header;
