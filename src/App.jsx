import React, { Component } from 'react';
import { Event } from './util/Event';

//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

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
    return (
      <div className="Todo" style={ this.state.style } >
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
