import { Component, createRef } from 'react';
import { Event } from '../util/Event';

class Switch extends Component {
  constructor(props){
    super(props);
    this.refSwitch = createRef();
    this.handlerSwitch = this.handlerSwitch.bind(this);
    this.state = { active: false, eventname: '' }
    //Event.on('closeInGame', this.closeInGame)
  }

  componentDidMount(){
    this.setState({ active: Boolean(this.props.active) })
  }

 /* closeInGame({ active, switch }){

  }*/

  handlerSwitch(e){
    e.stopPropagation();
    let active = !this.state.active;
    let eventname=this.props.eventname;
    this.setState({ active, eventname });
    Event.emit(eventname, { active, switche: this.refSwitch })


   // if(this.props.userProp && this.props.userProp.key)
     
 //   console.log('se detecto prop de user',this.props)
      //  Event.emit('configUser',{ ...this.props.userProp, active })
  //    }
 //     else{
   //     console.log('én el else de switch', this.props.userProp)
   //     Event.emit('inGame', { active, switche:this });
  //    }
  //  }
  }

  render() {
    const { eventname, displayname, active } = this.props;
    console.log('las props en switch',this.props)
    return (
      <div className={`Switch ${this.state.active?'active':''} `} 
           onClick={ this.handlerSwitch } 
           data-eventname={ eventname }
           ref={ this.refSwitch } >
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