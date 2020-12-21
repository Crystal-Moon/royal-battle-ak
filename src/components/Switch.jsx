import { Component, createRef } from 'react';
import { Event } from '../util/Event';

class Switch extends Component {
  constructor(props){
    super(props);
    this.handlerSwitch = this.handlerSwitch.bind(this);
    this.state = { 
      active: false, 
      eventname: '' 
    }
  }

  componentDidMount(){

    //this.setState({ active: Boolean(this.props.active) })

  }

  handlerSwitch(e){
    e.stopPropagation();
    let active = !Boolean(this.state.active)*1;
    let eventname = this.props.eventname || '';
    
    this.setState({ active: Boolean(active), eventname });
    Event.emit(eventname,{ active })
  }
  /*
  handlerSwitch(e){
    e.stopPropagation();
    let active = !this.state.active;
    this.setState({ active });
    if(this.props.userProp){
      if(this.props.userProp.key){
 //   console.log('se detecto prop de user',this.props)
        Event.emit('configUser',{ ...this.props.userProp, active })
      }
      else{
   //     console.log('én el else de switch', this.props.userProp)
      /* aqui solo hacer win.open con la ruta /in_game, y con helmet se quita todo con mini.css */
/*        Event.emit('inGame', { active, switche:this });
      }
    }
  }
*/

  render() {
    const { eventname='', tooltip='', displayname='' } = this.props;
    return (
      <div className={`Switch ${this.state.active?'active':''} `} 
           onClick={ this.handlerSwitch } 
           data-eventname={ eventname }
           title={ tooltip } >
        <div className="s-txt">
          <span>{ displayname }</span>
        </div>
        <div className="s-back">
          <div className="s" />
        </div>
      </div>
    );
  }
}

export default Switch;
