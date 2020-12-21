import { Component } from 'react';
import Logo from "./Logo";
import Switch from "./Switch";
import Config from './Config';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Logo />
        <Config />
      </div>
    );
  }
}

export default Header;
