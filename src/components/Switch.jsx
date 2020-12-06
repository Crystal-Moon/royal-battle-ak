import { Component, createRef } from 'react';
import { Event } from '../util/Event';
import userConfig from '../util/configUser';

class Switch extends Component {
  constructor(props){
    super(props);
    this.handlerSwitch = this.handlerSwitch.bind(this);
    this.state = { active: false }
  }

  componentDidMount(){

    //this.setState({ active: Boolean(this.props.active) })
    this.setState({ active: Boolean(userConfig.get(this.props.userProp.key)) })

  }

  handlerSwitch(e){
    e.stopPropagation();
    let active = !this.state.active;
    this.setState({ active });
    if(this.props.userProp){
      if(this.props.userProp.key){
    console.log('se detecto prop de user',this.props, active)
       // Event.emit('configUser',{ ...this.props.userProp, active })
      userConfig.set(this.props.userProp.key, active)
      }
      else{
   //     console.log('én el else de switch', this.props.userProp)
        Event.emit('inGame', { active, switche:this });
      }
    }
  }

  render() {
    const { userProp={} } = this.props;
    return (
      <div className={`Switch ${this.state.active?'active':''} `} 
           onClick={ this.handlerSwitch } 
           style={{display: this.props.parent=='app'? 'inline-flex':'none' }}
      >
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
