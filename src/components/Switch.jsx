
import { Component } from 'react';
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

  componentDidMount(){}

  handlerSwitch(e){
    e.stopPropagation();
    let active = !Boolean(this.state.active)*1;
    let eventname = this.props.eventname || '';
    
    this.setState({ active: Boolean(active), eventname });
    Event.emit(eventname,{ active })
  }

  render() {
    const { eventname, displayname, tooltip='' } = this.props;
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
