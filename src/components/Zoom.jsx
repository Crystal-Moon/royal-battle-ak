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
    //let zoom = parseInt(configUser.get('zoom') || 100)
    let zoom = parseInt(window.localStorage.getItem('zoom') || 100)
    //let zoom = configUser.get('zoom') || 100
   // console.log('el zoom rescatado de user', zoom)
    //configUser.set('zoom',zoom)
    this.setState({ zoom })
    Event.emit('changeZoom',{ zoom })
  }

  changeZoom(e){
    e.stopPropagation();
    let z = e.target.dataset.zoom
    let zoom = this.state.zoom + (10*z)
    zoom = zoom<100? 100 : zoom>200? 200 : zoom;
   // console.log('el zomm a st',zoom)
    this.setState({ zoom })
    //configUser.set('zoom',zoom)
    window.localStorage.setItem('zoom', zoom)
    Event.emit('changeZoom',{ zoom })
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