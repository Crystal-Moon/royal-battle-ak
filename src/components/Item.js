
import { Component, createRef } from 'react';
import { Event } from '../util/Event';


import Hover from "./Hover";
import ItemIcon from './ItemIcon';

class Item extends Component {
  constructor(){
    super();
    this.handlerClick = this.handlerClick.bind(this);
    this.itemRef = createRef();

  }

  handlerClick(e){
    //console.log('click en Item',e)
    let eventname = this.itemRef.current.dataset.eventname;
    let id = this.itemRef.current.dataset.id;
    //console.log('el eventname', eventname, 'y el id', id)
    Event.emit(eventname, { id, ref: this.itemRef })
    e.stopPropagation();
  }

  render() {
   // console.log(this.props)
    const { item={}, eventname } = this.props;
    return (
      <div className="Item" onClick={ this.handlerClick } data-eventname={ eventname } data-id={ item.id } ref={ this.itemRef } >
        	<ItemIcon item={ item } />
        	<Hover item={ item }></Hover>
      </div>
    );
  }
}

export default Item;
