import { Component } from 'react';

class Zoom extends Component{

  render(){
	return (
	  <div className="Zoom">

          <span className="s">-</span>
        
		<div className="s-txt">
          <span>110</span>
        </div>
        
          <span className="s">+</span>
        
	  </div>
	);
  }
}

export default Zoom;