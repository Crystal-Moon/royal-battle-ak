import ReactDOM from 'react-dom';
import {Event} from './Event';
import InGame from '../components/InGame';
const rootMini=document.getElementById('root-mini');
//let win={close:()=>{}}
console.log('el root mini', rootMini)

export default {
	root: document.getElementById('root-mini'),
	active:(()=>{
		Event.on('inGame',({ active })=>{
			
  		console.log('active en handler',active)
 	 	if(active){
		
    	//rootMini.innerHTML=''
    	let div=document.createElement('div')
    	window.ven = ReactDOM.render(<InGame />, div);
    	console.log('la ventana', window.ven)
    	rootMini.appendChild(div)
	}else{
		console.log('el else de ingame js', window.ven)
		window.ven.myModal.current.window.close()
		rootMini.innerHTML=''
		//win.close()
	}



		})
		//return 0;
	})()
}



//module.exports = { InGame };