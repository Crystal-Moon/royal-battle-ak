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

import d from './royal-battle-akes.json';
const DATA = Promise.resolve(d)

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
		item.made_by = item.made_by.map(x=> d.find(z=> z.id == x) )
		//item.made_by = z.filter(x=>item.by.includes(x.id)) // review
		//item.made_by.forEach(i=>i.cant=(item.by.find(y=>y.id)).x)
		item.mat_for = item.mat_for.map(x=> d.find(z=> z.id == x) )
		//console.log('item Por id',item)
		return item;
	}),

	getAll: () => DATA.then(all=>{
	  let R={}
	  all.forEach(x=>{
		if(!R[x.type]) R[x.type] = {}
	    if(!R[x.type][x.qlty]) R[x.type][x.qlty] = []
	    R[x.type][x.qlty].push(x)
      })
      return R
	}),
	
	getByQlty: (data,qlty) => data.then(z=> z.filter(x=>x.qlty==qlty)),

	getByType: (data,type) => data.then(z=> z.filter(x=>x.type==type)),



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
console.log('data global',DATA)