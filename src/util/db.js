import spirit from '../test-db/spirits.json';
import items from '../test-db/items.json';
import rewards from '../test-db/rewards.json';
//import themes from './royal-battle-themes.json';

const SPIRITS = Promise.resolve(spirit);
const REWARDS = Promise.resolve(rewards);
const DATA = Promise.resolve(items);
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