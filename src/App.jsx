import React, { Component } from 'react';
import { Event } from './util/Event';

//import logo from './logo.svg';
//import './assets/css/gral.css'; 
import './assets/css/gral1.css'; // probar para ver vien diff, viene de AppMini branch
import './assets/css/royal.css';
import './assets/css/scrollbar.css';

// Components
//import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import Footer from './components/Footer';

//import {InGame} from './util/handlerInGame'; // el handler de util
//import {InGame} from './components/InGame'; // el componente // ni existe , ni se crea aqui :(

class App extends Component {
  
  constructor(){
    super();
  //  this.changeZoom = this.changeZoom.bind(this)
 /*   this.state = {
      style: {
        fontSize: '1rem'
      }
    }*/


   // Event.on('changeZoom', this.changeZoom)
  }


  componentDidMount(){
  	
  	//require('./assets/css/themes/nowa.css'); //funciona genial :D
  }
/*
  changeZoom({ zoom }){
    let z = zoom / 100
    this.setState({ style:{ fontSize:`${z}rem`}})
  }
 */ 
  render() {
    const { children } = this.props;
    //console.log('los children', children)
    
    return (
      <div className="Todo" >
        <div className="Header">
          <Logo/>
        </div>
        <Main body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
