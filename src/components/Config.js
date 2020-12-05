import { Component, createRef } from 'react';
//import ConfigOption from './ConfigOption';
import ConfigIcon from './ConfigIcon';
import Switch from './Switch';
import Zoom from './Zoom';
import Theme from './Theme';

class Config extends Component {
  constructor(props){
    super(props);
    this.refConfig = createRef();
    this.showConfig = this.showConfig.bind(this);

  }

  componentDidMount(){

  }

  showConfig(e){
    e.stopPropagation();
    this.refConfig.current.classList.toggle('show');
    console.log(this.refConfig)
  }

  render() { /*<ConfigOption />*/ /* aqui recibe un array de string con las opciones a cargar 
  y segun ello la cantidad de Switch q tendra y lo q hara cada uno, ya sea de la ventana principal o la mini */
    let somePropUser = { key: 'someProp', displayName: 'Some Prop', default: 'some value', active: false }
    console.log('prop en config',this.props)
  
    return (
      <div className="Config"  ref={ this.refConfig } >
        <div onClick={ this.showConfig } style={{height:'2.5em',margin:'0'}} >
          <ConfigIcon />
        </div>
        <div className="config-in" >
          <Switch userProp={ somePropUser } active={ somePropUser.active } />
          <Switch />
          <Switch />
          <Theme parent={this.props.parent}/>
          <Zoom />
        </div>	
      </div>
    );
  }
}

export default Config;
