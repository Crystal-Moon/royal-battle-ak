import { Component } from 'react';
import { Event } from '../util/Event';

class Zoom extends Component{
  
  constructor(props){
  	super();
  	this.changeZoom = this.changeZoom.bind(this)
  	this.state = {
  		zoom: 100
  	}

  }

  componentDidMount(){
  	/* llamar a los datos del store y setear el state con el vcalor del usuario */
  	// this.setState({ zoom: })
  	// Event.emit('changeZoom',{ zoom })
  }

  changeZoom(e){
  	e.stopPropagation();
  	let z = e.target.dataset.zoom
  	let zoom = this.state.zoom + (10*z)
  	zoom = zoom<100? 100 : zoom>200? 200 : zoom;
	this.setState({ zoom })
	Event.emit('changeZoom',{ zoom })
  }

  render(){
	return (
	  <div className="Zoom">

          <span className="s" onClick={ this.changeZoom } data-zoom={-1} >-</span>
        
		  <div className="s-txt">
            <span>{ this.state.zoom }%</span>
          </div>
        
          <span className="s" onClick={ this.changeZoom } data-zoom={1} >+</span>
        
	  </div>
	);
  }
}

export default Zoom;