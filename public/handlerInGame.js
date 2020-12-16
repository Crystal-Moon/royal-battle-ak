const BTN = document.getElementById('SwitchInGame');

function handlerInGame(){
	//console.log('el BTN',BTN) 
	let status= BTN.dataset.status;
	if(status=='off'){
		BTN.classList.add('active')
		BTN.dataset.status='on'
		openMini()
	}else{
		BTN.dataset.status='off'
		BTN.classList.remove('active')
		if(window.mini) window.mini.close();
	}
}

function openMini() {
	window.mini= window.open('in_game','mini_in_game',
		'height=420,width=420,scrollbars=1,location=no,menubar=no,toolbar=no,resizable=yes,status=no');

	window.miniIsOpen=true;
	//console.log('ventna papa', window.mini.opener)
/*	window.mini.addEventListener("beforeunload", function (e) {

  		window.opener.onCloseMini();
  		(e || window.event).returnValue = null;
  		window.alert('saliendo')
  		return 'some_return';
	}); 
	*/
	/*
	window.mini.onbeforeunload = function (){
		window.opener.onCloseMini();
		return null;
	};*/

}

window.onbeforeunload = function (e) {
	//window.alert('saliendo...')
	if(window.opener) window.opener.onCloseMini();
  	//(e || window.event).returnValue = null;
  		//window.alert('salido')
  	//return 'some_return';
};

window.onCloseMini = function () {
	//console.log('se cerro miniVentana', document.getElementById('SwitchInGame'));
	//document.getElementById('SwitchInGame')
	window.handlerInGame(document.getElementById('SwitchInGame'))
}

window.handlerInGame=handlerInGame;