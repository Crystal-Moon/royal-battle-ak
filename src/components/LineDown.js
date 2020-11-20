import { Component } from 'react';

class LineDown extends Component{


  render(){ /* se altera solo el 80% segun se necesite *//* no olvidar el from del color, segun el fondo*/
  	const { x='' } = this.props;
  	return(
  		<line x1="50%" y1="50%" y2="95%" x2={x +'%'}>
            <animate attributeName="x2" from="50%" to={x +'%'} dur="0.4s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.4s" repeatCount="1" />
            <animate attributeName="stroke" from="#333" to="#D4AF37" dur="0.4s" repeatCount="1" fill="freeze" />
        </line>
  	);
  }
}

export default LineDown;