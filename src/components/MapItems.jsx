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
      key: 0,
      itemSelected: null
    }
    Event.on('desglose',this.getAndCharge)
    Event.on('moveToCentre',this.moveAndGet)
  }

  componentDidMount(){}

  moveAndGet({ id, ref }){
    console.log('lo q llega de params', id, ref) //se saco target desde Item
    let central = this.itemCentral.current.itemRef.current;
    let item = ref;
    let centerBound = central.getBoundingClientRect();
    let itemBound = item.current.getBoundingClientRect();

    let x = centerBound.left - itemBound.left;
    let y = centerBound.top - itemBound.top;
    item.current.style.transform = `translate(${x}px, ${y}px)`

    setTimeout(this.getAndCharge, 140, { id, ref })
  }

  getAndCharge({ id, ref }){
    if(ref) ref.current.style.transform = ''
    db.getById(id).then(itemSelected => this.setState({ itemSelected, key: new Date().getTime() }))
  }

  render() {
    if(this.state.itemSelected){
      const { made_by=[], mat_for=[] } = this.state.itemSelected;
      return (
        <div className="MapItems">
       
       	  <div className="svg-cointeiner">
  		      <Svg made_by={ made_by } mat_for={ mat_for } key={this.state.key} /> 
  		    </div>

          <div className="icon-conteiner">
            <div className="icon-3">
              {
                mat_for.map((i,k) => <Item key={k} item={i} eventname='moveToCentre' />)
              }
            </div>
            <div className="icon-3 central posible">
              <Item item={ this.state.itemSelected } ref={ this.itemCentral } />
            </div>
            <div className="icon-3">
              {
                made_by.map((i,k) => <Item key={k} item={i} eventname='moveToCentre' />)
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