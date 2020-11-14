import { Component } from 'react';
import Item from "./Item";

class AcordeonItem extends Component {
  render() {  /* <!-- la mitad de los item eztablecer clase hover-l y la segunda mitad con hover-r --> */
    return (
      <li className="AcordeonItem">
        <h4>Titulo de Seccion</h4>
        <ul className="ul">
          
          <div className="item-section">
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
          </div> 

          <div className="item-section">
           <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
            <li>
              <Item></Item>
            </li>
          </div>

        </ul>
      </li>
    );
  }
}

export default AcordeonItem;
