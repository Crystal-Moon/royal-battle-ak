
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
  	db.getAll().then(items=> this.setState({ items }))
  }

  render() {
    return (this.state.items.eido?
      <ul>
        <AcordeonItem items={this.state.items.eido} titleSection="Eidolons" />
        <AcordeonItem items={this.state.items.equipo} titleSection="Equipamiento" />
        <AcordeonItem items={this.state.items.potas} titleSection="Consumibles" />
      </ul>
     :
			<ul></ul>
		)
  }
}

export default Acordeon;
