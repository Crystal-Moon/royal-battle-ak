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
	getById: id => DATA.then(z=>{
		let item = z.find(x=>x.id==id) || {}
		item.made_by = z.filter(x=>item.by.includes(x.id)) // review
		item.mat_for = z.filter(x=>item.for.includes(x.id))
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