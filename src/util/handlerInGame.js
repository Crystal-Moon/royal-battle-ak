import ReactDOM from 'react-dom';
import {Event} from './Event';
import InGame from '../components/InGame';
const rootMini=document.getElementById('root-mini');
//let win={close:()=>{}}
//console.log('el root mini', rootMini)

export default {
	root: document.getElementById('root-mini'),
	active:(()=>{
		Event.on('inGame',({ active, switche })=>{
			
  	//	console.log('active en handler',active,switche)
 	 	if(active){
		
    	//rootMini.innerHTML=''
    	let div=document.createElement('div')
    	window.ven = ReactDOM.render(<InGame />, div);
    	window.ven.myWindow.current.window.addEventListener("beforeunload", (event)=>{
    //		console.log('dentro del onbefore')
    		window.postMessage({ miniClosed: true }, window.ven.myWindow.current.window)

    	 Event.emit('inGame',{ active:false, switche}) });
    	window.postMessage({ miniOpen: true })
    	//console.log('la ventana', window.ven)
    	rootMini.appendChild(div)
	}else{
		//console.log('el else de ingame js', window.ven.myWindow)
		window.ven.myWindow.current.window.close()
		switche.setState({ active:false })
		rootMini.innerHTML=''
		//win.close()
	}



		})
		//return 0;
	})()
}



/* esto se probara en neutralino */

window.addEventListener("message", (event) => {
  /* todo el tiempo se recibe cosas, por eso es mejor usar una prop personal como  'hi', data siempre existira */
  if(event.data.miniOpen) console.log('se abrio mini')
  if(event.data.miniClosed) console.log('se cerro mini')
  // ...
}, false);
