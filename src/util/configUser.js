
import { Event } from './Event';


export default {

	get:(prop)=>{
		let value = window.localStorage.getItem(prop);
		value = !isNaN(value)? parseInt(value) : value=='false'? false : value
		Event.emit(prop,value);
		return value;
	},

	set: (prop, value) =>{
		//console.log('en set de user', prop, value)
		Event.emit(prop,value)
		window.localStorage.setItem(prop, value)
	}

}