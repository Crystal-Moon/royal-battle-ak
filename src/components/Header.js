import { Component } from 'react';
import Logo from "./Logo";
import Switch from "./Switch";

class Header extends Component {
  render() {
    return (
      <div id="header" className="Header">
        <Logo></Logo>
        <Switch></Switch>
      </div>
    );
  }
}

export default Header;
