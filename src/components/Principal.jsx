import { Component } from 'react';
import SectionIntroduccion from "./SectionIntroduccion";
import SectionPVP from "./SectionPVP";
import SectionItems from "./SectionItems";
import SectionRecompensas from "./SectionRecompensas";
import SectionSobreMi from "./SectionSobreMi";

class Principal extends Component {
  render() {
    const { body } = this.props;
   // console.log('el body',body)
    
    return (
      <article className="Principal">
        {body}
      </article>
    );
  }
}

export default Principal;

/*

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

  componentDidMount(){
    window.myEvent=Event
  }

  changeTab({ tab }){
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


*/