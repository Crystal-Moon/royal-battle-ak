import React, { Component } from 'react';
//import logo from './logo.svg';
import './assets/css/gral.css';
import './assets/css/royal.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

class App extends Component {

  componentDidMount(){
  	
  	//require('./assets/css/themes/nowa.css'); //funciona genial :D
  }
  
  render() {
    return (
      <div className="Todo">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
