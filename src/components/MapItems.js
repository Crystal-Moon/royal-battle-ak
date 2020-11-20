import { Component, createRef } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

import Svg from './Svg';
import Item from './Item';
import ItemIcon from './ItemIcon';

class MapItems extends Component {
  constructor(){
    super();
    this.moveAndGet = this.moveAndGet.bind(this);
    this.getAndCharge =  this.getAndCharge.bind(this);

    this.itemCentral = createRef();
    this.state = {
      itemSelected: null
    }

    Event.on('desglose',this.getAndCharge)


  }


  /* aqi tendre un event.on para mostrar el elejido y todo lo q conlleva, eso en el Item del centro */
/* as u vez esta clase tiene un Event.on para el translate del icono, y es esta clase que dispara el emit */

  moveAndGet(){

  }

  getAndCharge({ id }){

    console.log('el ad en getNcharge',id)
    db.getById(id).then(itemSelected => this.setState({ itemSelected }))
  }

  render() {
    if(this.state.itemSelected){
      const { made_by=[], mat_for=[] } = this.state.itemSelected;
      console.log('el itemSelected', this.state.itemSelected)
      console.log('lso BY', made_by, 'FOR', mat_for)

      return (
        <div className="MapItems">
       
       	  <div className="svg-cointeiner">
  		      <Svg by={ made_by } for={ mat_for } /> 
  		    </div>

          <div className="icon-conteiner">
            <div className="icon-3">
              {
                mat_for.map((i,k) => <Item key={k} item={i} eventName='moveToCentre' onClick={ this.moveAndGet } /> )
              }
            </div>
            <div className="icon-3 central posible">
              <Item item={ this.state.itemSelected } ref={ this.itemCentral } />
            </div>
            <div className="icon-3">
              {
                made_by.map((i,k) => <Item key={k} item={i} eventName='moveToCentre' onClick={ this.moveAndGet } /> )
              }
            </div> 
          </div>

        </div>
      )
    }else{
      return (
        <div className="MapItems">
          <div className="svg-cointeiner"></div>
          <div className="icon-conteiner"></div>
        </div>
      )
    }
  }
}

export default MapItems;

 /*


  <div className="icon-conteiner">
            <div className="icon-3">
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
            </div>
            <div className="icon-3 central posible">
              <Item ref={ this.itemCentral } />
            </div>
            <div className="icon-3">
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
              <Item handlerSelect='moveToCentre' onClick={ this.moveAndGet } />
            </div> 
          </div>


          */