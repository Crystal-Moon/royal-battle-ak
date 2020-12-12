
import { Component, createRef } from 'react';
import { Event } from '../util/Event';

import Hover from "./Hover";
import ItemIcon from './ItemIcon';

class Item extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.itemRef = createRef();
  }

  handlerClick(e){
    let eventname = this.itemRef.current.dataset.eventname;
    let id = this.itemRef.current.dataset.id;

    Event.emit(eventname, { id, ref: this.itemRef })
    e.stopPropagation();
  }

  render() {
    const { item={}, eventname } = this.props;
    return (
      <div className="Item" 
        onClick={ this.handlerClick } 
        data-eventname={ eventname } 
        data-id={ item.id } 
        ref={ this.itemRef } >
        	<ItemIcon item={ item } />
        	<Hover item={ item } />
      </div>
    );
  }
}

export default Item;
