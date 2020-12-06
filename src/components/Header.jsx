import { Component } from 'react';
import Logo from "./Logo";
import Switch from "./Switch";
import Config from './Config';

class Header extends Component {
  render() {
  //  const inGameProp = { displayName: 'In-game', active: false }
    console.log('el prop en header', this.props)
    return (
      <div className="Header">
        <Logo></Logo>
        <Switch userProp={  { displayName: 'In-game', active: false } } parent={this.props.parent} />
        <Config parent={this.props.parent} />
      </div>
    );
  }
}

export default Header;
