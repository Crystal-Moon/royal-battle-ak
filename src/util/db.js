//import spirit from '../test-db/spirits.json';
//import items from '../test-db/items.json';
//import rewards from '../test-db/rewards.json';
//import themes from './royal-battle-themes.json';

const SPIRITS = Promise.resolve([]);
const REWARDS = Promise.resolve([]);
const DATA = Promise.resolve([]);
const NEWS = Promise.resolve([

{
	date: '2020-12-15T00:00:00.000Z',
	body: 'Some mesagge'
},
{
	date: '2020-12-24T00:00:00.000Z',
	body: `Lorem	Todos los jugadores empiezan con el mínimo de recursos y equipamiento y deben ir consiguiendo mejores objetos mientras son desafiados constantemente por los otros jugadores y por una constante reducción de "área segura" (el campo de juego se hace más pequeño).</p>
        <p>Participando en esta arena puedes llegar a obtener una nueva pieza de equipamiento: El Espíritu Luminoso. Un accesorio que está disponible para usar desde el nivel sup. 1.</p>
        <p>La naturaleza aleatoria del punto de partida, la ubicación de los elementos y la reducción del área segura, convierte este género de pvp en un desafío de pensar y reaccionar rápidamente y mejorar las estrategias durante el juego para ser el último que quede vivo.</p>
        <p>Para eso mismo fue creado este programa tipo 'helper'.`
}

	])
//const THEMES = Promise.resolve(themes);
/*
const DATA = (() => new Promise(done=>{
	fetch('http://localhost:3100')
	.then(r => r.json())
	.then(db =>{
	//console.log(db) 
		done(db)

	})
}))();
*/

export default {
	getById: id => DATA.then(d=>{
		let {...item} = d.find(x=>x.id==id); // necesario destructure porq find me lo cambia todo u.u
		//let by = item.by.map(x=>x.id)
		//console.log('el item llegado de db', d.find(x=>x.id==id))
	/*	
		item.made_by = item.made_by.map(x=>{
			let z= d.find(y=> y.id == x.id)
			return ({ ...z, ...x })
		})
	*/
		item.made_by = item.made_by.map(x=> d.find(z=> z.id == x));
		//item.made_by = z.filter(x=>item.by.includes(x.id)) // review
		//item.made_by.forEach(i=>i.cant=(item.by.find(y=>y.id)).x)
		item.mat_for = item.mat_for.map(x=> d.find(z=> z.id == x));
		//console.log('item Por id',item)
		return item;
	}),

	getAll: () => DATA.then(all=>{
	  let R={};
	  all.forEach(x=>{
		if(!R[x.type]) R[x.type] = {};
	    if(!R[x.type][x.qlty]) R[x.type][x.qlty] = [];
	    R[x.type][x.qlty].push(x);
      })
      return R;
	}),

	getAllArray: () => DATA.then(all=>{
	  const type={ formula: 0, potas: 1, equipo: 2, eido: 3 };
	  const qlty={ blue: 1, green: 2, orange: 3 };
	  let R = all.sort((a,b)=>type[a.type] - type[b.type] || qlty[a.qlty] - qlty[b.qlty]);
	  return R;	
	}), 

	getHolySpirit: (qlty) => SPIRITS.then(z=> !qlty? z : z.filter(x=>x.qlty==qlty)),
	getRewads: ()=> REWARDS.then(r=>r),
	
	getByQlty: (data,qlty) => data.then(z=> z.filter(x=>x.qlty==qlty)),

	getByType: (data,type) => data.then(z=> z.filter(x=>x.type==type)),

	//getThemes: (name)=> THEMES.then(t=> name? t.find(z=>z.name==name) : t),

	getNews: ()=> NEWS.then(z=>z.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())),

}




/*
const DATA = (() => Promise.resolve(new Promise(done=>{
	fetch('http://localhost:3100')
	.then(r => r.json())
	.then(db =>{
	console.log('lo del get',db) 
		done(db)

	})
})))();
*/
//console.log('data global',DATA)