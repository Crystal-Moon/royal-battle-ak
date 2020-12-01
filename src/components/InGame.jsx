import { Component, createRef } from 'react';
import NewWindow from 'react-new-window';
import ReactDOM from 'react-dom';
import {Event} from '../util/Event'; 
import AppMini from './AppMini';

class InGame extends Component {
  constructor(){
  	super();
  	 console.log('in game creado')
  	this.handlerModal = this.handlerModal.bind(this);
  	this.myModal = createRef()
  	this.state = {
  		root: document.getElementById('root-mini'),
  		win: {close:()=>{}}
  	}
  	//Event.on('inGame', this.handlerModal)
  }

  handlerModal({ active }){
  console.log('active en handler',active)
 	 if(active){
		// nada de este if funciona, el de abajo si
    	//rootMini.innerHTML=''
    	let div=document.createElement('div')
    	window.ven = ReactDOM.render(<AppMini />, div);
    	console.log('la ventana', window.ven)
    	this.state.root.appendChild(div)
	/*}else{
		this.state.root.innerHTML=''
		this.state.win.close();
		//window.ven.close()
	}*/
    	}
  	if(!active){
  		console.log('en el jsx', this.myModal.current)
  		//this.myModal.current.setState({ mounted: false})
  		this.myModal.current.window.close()
  	}
  }


  render() {
    return (
     <NewWindow ref={this.myModal}>
     	<AppMini />
     </NewWindow>
    );
  }
}

export default InGame;
