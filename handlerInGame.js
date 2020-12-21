const BTN = document.getElementById('SwitchInGame');

function handlerInGame(pa){ 
	let status= BTN.dataset.status;
	if(!pa && status=='off'){
		BTN.classList.add('active')
		BTN.dataset.status='on'
		openMini()
	}else{
		if(window.mini) window.mini.close();
		BTN.dataset.status='off'
		BTN.classList.remove('active')
	}
}

function openMini() {
	window.mini= window.open('/in_game','mini_in_game',
		'height=600,width=220,' +
		'left=1200,top=400,' +
		'status=no,menubar=no,' +
		'toolbar=no,location=no,' +
		'resizable=yes,scrollbars=1,');
}

window.onbeforeunload = function () {
	if(window.opener) window.opener.onCloseMini();
};

window.onCloseMini = function () {
	if(!window.opener) window.handlerInGame(1)
}

window.handlerInGame=handlerInGame;

if(window.opener) BTN.style.display = 'none';
//if(window.opener && window.myEvent) window.myEvent.emit('changeTab',{ tab: 'in_game' })
//if(window.opener && window.setMyTop) window.setMyTop();