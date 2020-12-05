import { Component, createRef } from 'react';
import NewWindow from 'react-new-window';
import ReactDOM from 'react-dom';
import {Event} from '../util/Event'; 
import AppMini from './AppMini';

class InGame extends Component {
  constructor(){
  	super();
  	 console.log('in game creado')
  	//this.handlerModal = this.handlerModal.bind(this);
  	this.myWindow = createRef()
  /*	this.state = {
  		root: document.getElementById('root-mini'),
  		//win: {close:()=>{}}
  	}*/
  	//Event.on('inGame', this.handlerModal)
  }
/*
  handlerModal({ active }){
  console.log('active en handler',active)

  }
*/

  render() {
    return (
     <NewWindow ref={this.myWindow} 
        name='Desafio Divino - AKES'
        title='Desafio Divino - AKES'
        features={{
          width: 320,
          height: 440, /* si en localStore el hover esta activado usar 650 */
          left: 12000,
          screenX: 12000,
          top: 300,
          screenY: 300,
          center: 'screen'
          }} >
     	  <AppMini />
     </NewWindow>
    );
  }
}

export default InGame;
