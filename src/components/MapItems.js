import { Component } from 'react';

import Svg from './Svg';
import Item from './Item';
import ItemIcon from './ItemIcon';

class MapItems extends Component {
  render() {   /* lo mismo, los Item de los icon-3 tambienm los ultimos tendran hover-r y los primeros hover-l */
    return (
      <div className="MapItems">
       
       	<div className="svg-cointeiner">
  		   	<Svg />
  		</div>

        <div className="icon-conteiner">
            <div className="icon-3">
              <Item />
              <Item />
              <Item />
            </div>
            <div className="icon-3 central posible">
              <Item />
            </div>
            <div className="icon-3">
              <Item />
              <Item />
              <Item />
              <Item />
            </div> 
        </div>

       

      </div>
    );
  }
}

export default MapItems;
