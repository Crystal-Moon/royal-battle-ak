import { Component } from 'react';

class Switch extends Component {
  render() {
    return (
      <div className="Switch active">
        <div className="s-txt">
          <span>In-game</span>
        </div>
        <div className="s-back">
          <div className="s" />
        </div>
      </div>
    );
  }
}

export default Switch;
