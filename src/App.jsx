import React, { Component } from 'react';
import { Event } from './util/Event';

import './assets/css/gral.css';
import './assets/css/royal-mini.css';

// Components
//import PrincipalMini from "./components/PrincipalMini";
import Header from './components/Header';
import AcordeonMenu from './components/AcordeonMenu';
import MapItems from './components/MapItems';


import {InGame} from './util/handlerInGame'; // el handler de util
//import {InGame} from './components/InGame'; // el componente // ni existe , ni se crea aqui :(

class App extends Component {
  
  constructor(){
    super();
    this.changeZoom = this.changeZoom.bind(this)
    this.changeHover = this.changeHover.bind(this)
    this.state = {
      zoom: 100,
      nohover: 0
    }
    Event.on('changeZoom', this.changeZoom)
    Event.on('nohover', this.changeHover)
  }


  componentDidMount(){
    //let nohover = Boolean(parseInt(window.localStorage.getItem('nohover')))
  //  let nohover = window.localStorage.getItem('nohover')=='true'?true:false
  //  console.log('el no hover en app', nohover, typeof nohover)
  //  this.setState({ nohover })
    //require('./assets/css/themes/nowa.css'); //funciona genial :D
  }

  changeZoom({zoom}){
      
    //let z = zoom / 100
    this.setState({ zoom })
  
  }

  changeHover({ active }){

  console.log('hover cambia en app', active)
    this.setState({ nohover: active })
    //window.localStorage.setItem('nohover', active)
  }

  render() {
    return (
      <div className={`Todo ${this.state.nohover?'no-hover':''}`} style={ {fontSize: `${this.state.zoom/100}rem` } } >
       {/* <div className="Principal"> */}
          <Header />
          <AcordeonMenu />
          <MapItems />
       {/* </div> */}
      </div>
    
    );
  }
}

export default App;
