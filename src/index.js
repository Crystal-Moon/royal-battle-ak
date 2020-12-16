import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

//import Rutas from './routes';
import App from './App';
//import AppMini from './AppMini'; // no importar en App
/*
render(
  <Router history={MemoryRouter}  >
    <Rutas /> 
  </Router>,
  document.getElementById('root')
);
*/
render(
  <App />,
  document.getElementById('root')
);
