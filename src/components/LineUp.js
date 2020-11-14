import { Component } from 'react';

class LineUp extends Component{


  render(){ /* se altera solo el 25% segun se necesite */
  	return(
  		<line x1="25%" y1="5%" x2="50%" y2="50%">
            <animate attributeName="x1" from="50%" to="25%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
        </line>
  	);
  }
}

export default LineUp;