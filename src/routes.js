// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import InGame from './components/AppMini';
import Intro from './components/SectionIntroduccion';
import Items from './components/SectionItems';
import PVP from './components/SectionPVP';
import Rewards from './components/SectionRecompensas';
import ModeInGame from './components/SectionModeInGame';
import SobreMi from './components/SectionSobreMi';

const Rutas = () =>
  <App>
    
      <Route exact path="/?a=pvp" component={PVP} />
      <Route exact path="/?a=items" component={Items} />
      <Route exact path="/?a=rewards" component={Rewards} />
      <Route exact path="/?a=mode_in_game" component={ModeInGame} />
      <Route exact path="/?a=abaut" component={SobreMi} />
      <Route exact path="/?a=in_game" component={InGame} />
      <Route exact path="/?a=in_game1" component={InGame} />
      <Route exact path="/" component={Intro} />
      <Route component={Intro} />
    
  </App>;

export default Rutas;
