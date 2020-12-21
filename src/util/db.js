
const GO = (file) => new Promise(done=>{
	fetch(`https://raw.githubusercontent.com/Crystal-Moon/royal-battle-ak/master/database/${file}.json`)
	.then(r=> done(r.json()))
});

const NEWS = GO('news');
const ITEMS = GO('items');
const REWARDS = GO('rewards');
const SPIRITS = GO('spirits');

export default {
	getById: id => ITEMS.then(d=>{
		let {...item} = d.find(x=>x.id==id);
		item.made_by = item.made_by.map(x=> d.find(z=> z.id == x));
		item.mat_for = item.mat_for.map(x=> d.find(z=> z.id == x));
		return item;
	}),

	getAll: () => ITEMS.then(all=>{
	  let R={};
	  all.forEach(x=>{
		if(!R[x.type]) R[x.type] = {};
	    if(!R[x.type][x.qlty]) R[x.type][x.qlty] = [];
	    R[x.type][x.qlty].push(x);
      })
      return R;
	}),

	getAllArray: () => ITEMS.then(all=>{
	  const type={ formula: 0, potas: 1, equipo: 2, eido: 3 };
	  const qlty={ blue: 1, green: 2, orange: 3 };
	  let R = all.sort((a,b)=>type[a.type] - type[b.type] || qlty[a.qlty] - qlty[b.qlty]);
	  return R;	
	}), 

	getHolySpirit: (qlty) => SPIRITS.then(z=> !qlty? z : z.filter(x=>x.qlty==qlty)),

	getRewads: ()=> REWARDS.then(r=>r),

	getNews: ()=> NEWS.then(z=>z.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()))

}
