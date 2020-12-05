
import { Event } from './Event';


export default {

	get:(prop)=>{
		let value = window.localStorage.getItem(prop);
		Event.emit(prop,value);
		return value;
	},

	set: (prop, value) =>{
		//console.log('en set de user', prop, value)
		Event.emit(prop,value)
		window.localStorage.setItem(prop, value)
	}

}