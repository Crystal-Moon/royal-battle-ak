
import React from 'react';
import ReactDOM from 'react-dom';
import {Event} from './Event';
//import InGame from '../components/InGame';
const ROOT=document.getElementById('root-mini');
//let win={close:()=>{}}
//console.log('el root mini', ROOT)

export default {
	root: document.getElementById('root-mini'),
	active:(()=>{
		Event.on('inGame',({ active, switche })=>{
			
  		console.log('active en handler',active,switche)
 	 	if(active){
		
    	//let ven = window.open('about:blank',null,'height=420,width=420,toolbar=no,location=no')
      //let ven = window.open()
      //console.log('la ven', ven)

    	//let div=ven.document.createElement('div')
      //div.id='rootMini'
      //ven.document.body.appendChild(div)

    	//ReactDOM.render(<InGame />, ven.document.getElementById('rootMini'));
      //console.log('la ven', ven1.myWindow)

     
     //ven.close()

     


      //window.ven.document.body.appendChild(div)
      let mini = window.open('in_game', '', 
        'height=420,width=420,toolbar=no,location=no');
     // window.mini=mini;
      console.log('la mini',mini)
    	mini.focus();
      mini.onload=(e)=>{
        mini.opener.postMessage({ miniOpen: true }, mini)
        console.log('se cargo la mini',e)
      }
    /*	mini.addEventListener("beforeunload", (event)=>{
    		console.log('dentro del onbefore')
    		console.log('window.mini', window.mini)
        console.log('el opener', mini.opener)
        //window.opener.postMessage({ miniClosed: true }, window.mini)

    	   Event.emit('inGame',{ active:false, switche})
         return undefined; 

       });*/
      mini.switche=switche;
      mini.onbeforeunload=()=>{
        console.log('dentro del onbefore')
        //console.log('window.mini', String(window.mini.onbeforeunload))
       // console.log('el opener', String(mini.opener.onbeforeunload))// null
        // console.log('el opener', String(mini.opener))
        mini.opener.postMessage({ miniClosed: true }, mini)
          //mini.switche.setState({ active:false })
         //Event.emit('closeInGame',{ active:false })
         //return undefined; 
      }

       window.mini=mini; 
    //	window.postMessage({ miniOpen: true })
    	//console.log('la ventana', window.ven)
    	//ROOT.appendChild(div)
	}else{
		//console.log('el else de ingame js', window.ven.myWindow)
		//window.ven.myWindow.current.window.close()
    if(window.mini) window.mini.close()
		//switche.setState({ active:false })
		//ROOT.innerHTML=''
		//win.close()
	}



		})
		//return 0;
	})()
}



/* esto se probara en neutralino */

window.addEventListener("message", (event) => {
  /* todo el tiempo se recibe cosas, por eso es mejor usar una prop personal como  'hi', data siempre existira */
 console.log('en message',event)
  if(event.data.miniOpen) console.log('se abrio mini')
  if(event.data.miniClosed) console.log('se cerro mini')
  // ...
}, false);
