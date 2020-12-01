import { Component, createRef } from 'react';
import { Event } from '../util/Event';
//import NewWindow from 'react-new-window';
//import ReactDOM from 'react-dom';
//import Event from '../util/Event'; 
//import AppMini from './AppMini';


//import InGame from './InGame';
//const rootMini=document.getElementById('root-mini');

class Switch extends Component {
  constructor(props){
    super(props);
    //this.refSwitch = createRef();   ref={ this.refSwitch }
    this.handlerSwitch = this.handlerSwitch.bind(this);
    //this.handlerToolModal = this.handlerToolModal.bind(this)
    this.state = { active: false }
  }

  componentDidMount(){

    this.setState({ active: Boolean(this.props.active) })

  }

  handlerSwitch(e){
    e.stopPropagation();
    let active = !this.state.active;
    this.setState({ active });
    //console.log('state del switch', active)
    //console.log('nombre del evento',this.props )
    if(this.props.switchInGame){
    //console.log('el evento es true')
    Event.emit('inGame', { active });
   // this.handlerToolModal(active);
    }
    //else Event.emit('configUser',{ ...this.props.userProp, active })

  }
/*
  handlerToolModal(active){
  
    if(active){
    //    let rootMini=document.getElementById('root-mini');
   // rootMini.innerHTML=''
    let div=document.createElement('div')
    window.ven = ReactDOM.render(<AppMini />, div);
    console.log('la ventana', window.ven)
    rootMini.appendChild(div)

    }else{
    rootMini.innerHTML=''
    }
  }
*/
  render() {
    const { userProp={} } = this.props;
    return (
      <div className={`Switch ${this.state.active?'active':''} `} onClick={ this.handlerSwitch } >
        <div className="s-txt">
          <span>{ userProp.displayName }</span>
        </div>
        <div className="s-back">
          <div className="s" />
        </div>
      </div>
    );
  }
}

export default Switch;
