import { Component } from 'react';

class LineDown extends Component{


  render(){ /* se altera solo el 80% segun se necesite */
  	return(
  		<line x1="50%" y1="50%" y2="95%" x2="80%">
            <animate attributeName="x2" from="50%" to="80%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
        </line>
  	);
  }
}

export default LineDown;