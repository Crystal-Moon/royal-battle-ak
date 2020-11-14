import { Component } from 'react';
import Hover from "./Hover";
import ItemIcon from './ItemIcon';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        
        	<ItemIcon></ItemIcon>
        	<Hover></Hover>
       
      </div>
    );
  }
}

export default Item;
