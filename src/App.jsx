//import React, { Component } from 'react';
//import { Event } from './util/Event';

import './assets/css/gral.css';
import './assets/css/royal.css';
import './assets/css/scrollbar.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//import {InGame} from './util/handlerInGame'; // el handler de util
//import {InGame} from './components/InGame'; // el componente // ni existe , ni se crea aqui :(

function App(props) {
  const { children } = props;
  return (
      <div className="Todo" >
        <Header />
        <Main body={children} />
        <Footer />
      </div>
  );
}

export default App;
