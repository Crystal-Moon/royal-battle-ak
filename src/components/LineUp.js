import { Component } from 'react';

class LineUp extends Component{

  render(){ /* se altera solo el 25% segun se necesite *//* no olvidar el from del color, segun el fondo*/
  	const { x='' } = this.props;
  	return(
  		<line x1={x +'%'} y1="5%" x2="50%" y2="50%" >
            <animate attributeName="x1" from="50%" to={x +'%'} dur="0.4s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.4s" repeatCount="1" />
            <animate attributeName="stroke" from="#333" to="#D4AF37" dur="0.4s" repeatCount="1" fill="freeze" />
        </line>
  	);
  }
}

export default LineUp;