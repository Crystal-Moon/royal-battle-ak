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
      console.log('el items',items)
	  let types=Object.keys(items)   	  




      this.setState({ items })
    })
  	
  }

  render() {
  	if(this.state.items.eido){
    return (
      <ul className="Acordeon ul">
        <AcordeonItem items={this.state.items.eido} tipo="eido" />
        <AcordeonItem items={this.state.items.equipo} tipo="equipo" />
        <AcordeonItem items={this.state.items.o} tipo="o" />
      </ul>
    )
	}else{
		return(
			<ul className="Acordeon ul"></ul>
		)
	};
  }
}

export default Acordeon;
