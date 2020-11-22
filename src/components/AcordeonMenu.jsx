import { Component } from 'react';
import AcordeonItem from "./AcordeonItem";
import db from '../util/db';

class Acordeon extends Component {
  constructor(){
  	super();
  	this.state={
  		items: {}
  	}
  }

  componentDidMount(){
  	db.getAll().then(items=>{
      //console.log('el items',items)
      this.setState({ items })
    })
  	
  }

  render() {
  	if(this.state.items.eido){
    return (
      <ul>
        <AcordeonItem items={this.state.items.eido} titleSection="Eidolons" />
        <AcordeonItem items={this.state.items.equipo} titleSection="Equipamiento" />
        <AcordeonItem items={this.state.items.potas} titleSection="Consumibles" />
      </ul>
    )
	}else{
		return(
			<ul></ul>
		)
	};
  }
}

export default Acordeon;
 
 /* 
 <ul className="Acordeon ul"></ul>

 */