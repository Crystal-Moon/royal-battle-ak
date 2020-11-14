import { Component } from 'react';
//import ConfigOption from './ConfigOption';
import Switch from './Switch';
import Zoom from './Zoom'

class Config extends Component {
  render() { /*<ConfigOption />*/
    return (
      <div className="Config">
        <img src alt="cfg" />
        <div className="config">
          <Switch />
          <Switch />
          <Switch />
          <Zoom />
        </div>	
      </div>
    );
  }
}

export default Config;
