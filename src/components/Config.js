import { Component } from 'react';
//import ConfigOption from './ConfigOption';
import ConfigIcon from './ConfigIcon';
import Switch from './Switch';
import Zoom from './Zoom';

class Config extends Component {
  render() { /*<ConfigOption />*/ /* aqui recibe un array de string con las opciones a cargar 
  y segun ello la cantidad de Switch q tendra y lo q hara cada uno, ya sea de la ventana principal o la mini */
  
    return (
      <div className="Config">
        <ConfigIcon />
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
