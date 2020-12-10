import { Component } from 'react';
import Logo from "./Logo";
import Switch from "./Switch";
//import Config from './Config';
import Zoom from './Zoom';

class Header extends Component {
  constructor(){
    super();
   /* this.state = {
      nonover: false
    }*/
  }

  componentDidMount(){
   // let noHover = Boolean(window.localStorage.getItem('noHover'))
   // this.setState({ noHover })
  }

  render() {
    //const inGameProp = { displayName: 'In-game', active: false }
    //console.log('el prop en header', this.props)
    let { nohover } = this.props;
    return (
      <div className="Header">
        <Logo/>
        {/* <Switch userProp={ inGameProp } /> */}
        {/* <Config parent={this.props.parent} /> */}
        <Switch eventname="nohover" active={ nohover } displayname="Ocultar detalles" 
          tooltip="Ocultar los detalles del Item al pasar el mouse por encima" />
        <Zoom/>
      </div>
    );
  }
}

export default Header;
