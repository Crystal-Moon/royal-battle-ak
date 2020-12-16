
import { Component } from 'react';
import { Event } from '../util/Event';

import InGame from './AppMini';
import Intro from './SectionIntroduccion';
import Items from './SectionItems';
import PVP from './SectionPVP';
import Rewards from './SectionRecompensas';
import ModeInGame from './SectionModeInGame';
import SobreMi from './SectionSobreMi';

class Principal extends Component{
  constructor(){
    super();
    this.changeTab = this.changeTab.bind(this);
    this.state={
      tab: 'home'
    }
    Event.on('changeTab', this.changeTab)
  }

  changeTab({ tab }){
    console.log('en el change de Princ', tab)
    this.setState({ tab })
  }

  render(){
  return (
    <article className="Principal scrollable">
      { 
      	(this.state.tab=='items')? <Items/>
      	: (this.state.tab=='pvp')? <PVP/>
      	: (this.state.tab=='rewards')? <Rewards/>
      	: (this.state.tab=='abaut')? <SobreMi/>
      	: (this.state.tab=='in_game')? <InGame/>
      	: (this.state.tab=='mode_in_game')? <ModeInGame/>
      	: <Intro/>
      
      }
    </article>
  );
  }
}

export default Principal;

