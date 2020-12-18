//import React, { Component } from 'react';
//import { Event } from './util/Event';

import './assets/css/gral.css';
import './assets/css/royal.css';
import './assets/css/scrollbar.css';

// Components
import Logo from './components/Logo';
import Main from './components/Main';
import Footer from './components/Footer';

function App(props) {
  const { children } = props;
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

export default App;
