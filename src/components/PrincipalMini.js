import { Component } from 'react';
import Config from "./Config";
import Switch from "./Switch";
import MapItems from './MapItems';
import Menu from "./Menu";
import Map from "./Map";

class PrincipalMini extends Component {
  render() {
    return (
      <div className="Principal PrincipalMini">
        <div className="Header">
          <Switch></Switch>
          <Config></Config>
        </div>
        <Menu />
        <MapItems/>
        <Map />
      </div>
    );
  }
}

export default PrincipalMini;
