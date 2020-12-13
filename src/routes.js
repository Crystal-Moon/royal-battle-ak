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
import Page404 from './components/Page404';

const Rutas = () =>
  <App>
    <Switch>
      <Route exact path="/pvp" component={PVP} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/rewards" component={Rewards} />
      <Route exact path="/mode_in_game" component={ModeInGame} />
      <Route exact path="/abaut" component={SobreMi} />
      <Route exact path="/in_game" component={InGame} />
      <Route exact path="/" component={Intro} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default Rutas;
