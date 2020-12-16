const BTN = document.getElementById('SwitchInGame');

function handlerInGame(active){
	//console.log('el BTN',BTN) 
	//let status= BTN.dataset.status;
	if(active){
		BTN.classList.add('active')
	//	BTN.dataset.status='on'
		openMini()
	}else{
	//	console.log('window mini',Boolean(window.mini))
		if(window.mini) window.mini.close();
	//	BTN.dataset.status='off'
		BTN.classList.remove('active')
	}
}

function openMini() {
	window.mini= window.open('/royalappmain','mini_in_game',
		'height=420,width=420,' +
		'left=1200,top=10,' +
		'status=no,menubar=no,' +
		'toolbar=no,location=no,' +
		'resizable=yes,scrollbars=1,');
}

window.onbeforeunload = function () {
	//window.alert('saliendo...')
	if(window.opener) window.opener.onCloseMini();
  	//(e || window.event).returnValue = null;
  		//window.alert('salido')
  	//return 'some_return';
};

window.onCloseMini = function () {
	//console.log('se cerro miniVentana', document.getElementById('SwitchInGame'));
	//document.getElementById('SwitchInGame')
	//if(!window.opener) window.handlerInGame(document.getElementById('SwitchInGame'))
	if(!window.opener) window.handlerInGame()
}

window.handlerInGame=handlerInGame;

if(window.opener) window.myEvent.emit('changeTab',{ tab: 'in_game' })