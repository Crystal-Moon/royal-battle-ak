import { Component } from 'react';
import Config from "./Config";
import Switch from "./Switch";
import Acordeon from './Acordeon';
import MapItems from './MapItems';

class PrincipalMini extends Component {
  render() {
    return (
      <div className="Principal PrincipalMini">
        <div className="Header">
          <Switch></Switch>
          <Config></Config>
        </div>

        <div className="Menu">
          <Acordeon></Acordeon>
        </div>
        
        <MapItems/>
      </div>
    );
  }
}

export default PrincipalMini;
