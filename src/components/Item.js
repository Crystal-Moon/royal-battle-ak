import { Component } from 'react';
import Hover from "./Hover";
import ItemIcon from './ItemIcon';

class Item extends Component {
  render() {
   // console.log(this.props)
    const { item={} } = this.props;
    return (
      <div className="Item">
        	<ItemIcon item={ item } />
        	<Hover item={ item }></Hover>
      </div>
    );
  }
}

export default Item;
 /*
 el translate maneja  pixeles o valores del elemento llamado, para valores de padre usar js
 HTML:

<div id="parent"> 
    <div id="children"></div> 
</div>​​​​​​​​​​​​​ 
código CSS:

#parent { 
    width: 200px; 
    height: 200px; 
    background: #ff0; 
} 
#children { 
    width: 10%; 
    height: 10%; 
    background: #f00; 
} 
código Javascript :

parent = document.getElementById('parent'); 
children = document.getElementById('children'); 

parent_height = parent.clientHeight; 
​children_translate = parent_height * 50/100; 
children.style.webkitTransform = "translateY("+children_translate+"px)";​​​​​​​​​​​​​​​​​​​​​​​​​​ 
*/