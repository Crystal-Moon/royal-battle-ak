import { Component } from 'react';
import Logo from "./Logo";
//import Switch from "./Switch";
import Config from './Config';
//import Zoom from './Zoom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Logo/>
        <Config />
     {/*   <Switch eventname="nohover" displayname="Ocultar detalles" 
          tooltip="Ocultar los detalles del Item al pasar el mouse por encima" />
        <Zoom/>  */}
      </div>
    );
  }
}

export default Header;
