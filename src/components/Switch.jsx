import { Component, createRef } from 'react';
import { Event } from '../util/Event';

class Switch extends Component {
    constructor(props){
    super(props);
    this.handlerSwitch = this.handlerSwitch.bind(this);
    this.state = { active: false, eventname: '' }
    //Event.on('closeInGame', this.setState)
    //Event.on('nohover', this.changeZoom)
  }

  componentDidMount(){
   // let nohover = window.localStorage.getItem('nohover')=='true'?true:false
//console.log(nohover, typeof nohover)
    let active = parseInt(window.localStorage.getItem(this.props.eventname) || 0)
    //let zoom = configUser.get('zoom') || 100
   // console.log('el zoom rescatado de user', zoom)
    //configUser.set('zoom',zoom)
    this.setState({ active: Boolean(active) })
    Event.emit(this.props.eventname,{ active })

  }

  handlerSwitch(e){
   e.stopPropagation();
    let active = !Boolean(this.state.active)*1;
    //console.log('active en handler s', active, typeof active)
    let eventname=this.props.eventname;
    this.setState({ active: Boolean(active), eventname });
    window.localStorage.setItem(eventname, active);
    //console.log('en handler switc', eventname, active, active)
    Event.emit(eventname,{ active })
  }

  render() {
    const { eventname, displayname, tooltip="" } = this.props;
    //console.log('las props en switch',this.props)
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
