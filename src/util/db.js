
export default {
	getById: async id =>{
	/*DATA.then(db =>{

	})*/
	console.log('en la funcion fetb id')
	console.log('el data es',DATA)

    return await DATA.then(z=>{
    	console.log('el z en',z)
    	return z.find(x=>x.id==id)
    })

}
}



const DATA = (() => new Promise(done=>{
	fetch('http://localhost:3100')
	.then(r => r.json())
	.then(db =>{
	//console.log(db) 
		done(db)

	})
}))();
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