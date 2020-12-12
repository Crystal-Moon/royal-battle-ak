
import { Component, createRef } from 'react';

import ConfigIcon from '../assets/imgs/config.png';
import Switch from './Switch';
import Zoom from './Zoom';

class Config extends Component {
  constructor(){
    super();
    this.refConfig = createRef();
    this.showConfig = this.showConfig.bind(this);
  }

  showConfig(e){
    e.stopPropagation();
    this.refConfig.current.classList.toggle('show');
  }

  render() { 
    return (
      <div className="Config"  ref={ this.refConfig } >
        <div onClick={ this.showConfig } style={{height:'2.5em',margin:'0'}} >
          <img className="ConfigIcon" src={ ConfigIcon } alt="config" />
        </div>
        <div className="config-in" >
          <Switch eventname="nohover" displayname="Ocultar detalles" 
              tooltip="Ocultar los detalles del Item al pasar el mouse por encima" />
          <Zoom/>
        </div>	
      </div>
    );
  }
}

export default Config;
