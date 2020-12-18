
import { Component, createRef } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

import Item from './Item';
import Canva from './Canva';

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
    let
      item = ref,
      central = this.itemCentral.current.itemRef.current,
      centerBound = central.getBoundingClientRect(),
      itemBound = item.current.getBoundingClientRect(),
      x = centerBound.left - itemBound.left,
      y = centerBound.top - itemBound.top
    ;

    item.current.style.transform = `translate(${x}px, ${y}px)`;
    setTimeout(this.getAndCharge, 140, { id, ref })
  }

  getAndCharge({ id, ref }){
    if(ref) ref.current.style.transform = '';
    db.getById(id).then(itemSelected =>
      this.setState({ 
        itemSelected, 
        key: new Date().getTime()  /*nesesario para forzar render */
      })
    )
  }

 render() {
  if(this.state.itemSelected){
   const { made_by=[], mat_for=[] } = this.state.itemSelected;
   return (
    <div className="MapItems">
      <Canva made_by={ made_by } mat_for={ mat_for } key={this.state.key} />
      
      <div className="icon-conteiner">
        <div className="icon-3">
          <div>
          {
          mat_for.map((i,k) => <Item key={k} item={i} eventname='moveToCentre' />)
          }
          </div>
        </div>
        
        <div className="icon-3 central">
          <div><Item item={ this.state.itemSelected } ref={ this.itemCentral } /></div>
        </div>
        
        <div className="icon-3">
          <div>
          {
          made_by.map((i,k) => <Item key={k} item={i} eventname='moveToCentre' />)
          }
          </div>
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
