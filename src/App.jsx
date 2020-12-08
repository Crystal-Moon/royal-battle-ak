import React, { Component } from 'react';
import { Event } from './util/Event';

//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import {InGame} from './util/handlerInGame'; // el handler de util
//import {InGame} from './components/InGame'; // el componente // ni existe , ni se crea aqui :(

class App extends Component {
  
  constructor(){
    super();
    this.changeZoom = this.changeZoom.bind(this)
    this.state = {
      style: {
        fontSize: '1rem'
      }
    }


    Event.on('changeZoom', this.changeZoom)
  }


  componentDidMount(){
  	
  	//require('./assets/css/themes/nowa.css'); //funciona genial :D
  }

  changeZoom({ zoom }){
    let z = zoom / 100
    this.setState({ style:{ fontSize:`${z}rem`}})
  }
  
  render() {
    const { children } = this.props;
    //console.log('los children', children)
    
    return (
      <div className="Todo" style={ this.state.style } >
        <Header parent="app" />
        <Main body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
