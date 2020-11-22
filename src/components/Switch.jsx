import { Component, createRef } from 'react';

class Switch extends Component {
  constructor(props){
    super(props);
    //this.refSwitch = createRef();   ref={ this.refSwitch }
    this.handlerSwitch = this.handlerSwitch.bind(this);
    this.state = { active: false }
  }

  componentDidMount(){

  }

  handlerSwitch(e){
    e.stopPropagation();
    let active = !this.state.active;
    this.setState({ active });
    console.log('state del switch', active)
    //if(this.props.switchInGame) Event.emit('inGame', { active });
    //else Event.emit('configUser',{ ...this.props.userProp, active })

  }

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
