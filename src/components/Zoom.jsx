
import { Component } from 'react';
import { Event } from '../util/Event';

class Zoom extends Component{
  constructor(props){
  	super(props);
  	this.changeZoom = this.changeZoom.bind(this);
    this.state = {
      zoom: 100
    }
  }

  componentDidMount(){
    let zoom = parseInt(window.localStorage.getItem('zoom') || 100);

    this.setState({ zoom });
    Event.emit('changeZoom',{ zoom });
  }

  changeZoom(e){
    e.stopPropagation();
    let z = e.target.dataset.zoom;
    let zoom = this.state.zoom + (10*z);
    zoom = zoom<100? 100 : zoom>200? 200 : zoom;

    this.setState({ zoom });
    window.localStorage.setItem('zoom', zoom);
    Event.emit('changeZoom',{ zoom });
  }

  render(){
	return (
	  <div className="Zoom">
      <span className="s-txt">Zoom</span>
      <span className="s" onClick={ this.changeZoom } data-zoom={-1} >-</span>  
		  <span className="s s-txt">{ this.state.zoom }%</span>
      <span className="s" onClick={ this.changeZoom } data-zoom={1} >+</span>
	  </div>
	);
  }
}

export default Zoom;
