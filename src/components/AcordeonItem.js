import { Component } from 'react';
import Item from "./Item";
import db from '../util/db';

class AcordeonItem extends Component {
  constructor(){
   // super();
   // this.state = {
   //   items: []
   // }
  }

  componentDidMount(){
    /* db.getByType().then(all=>{
      console.log('el all',all)
   
      //this.setState({ items: all })
    })*/
  }

  render() {  /* <!-- la mitad de los item eztablecer clase hover-l y la segunda mitad con hover-r --> */
                /* ya esta arreglado con los position */
  console.log('las props en  acorItem',this.props)
    let { blue=[], green=[], orange=[] } = this.props.items;
   // const qlities= this.props.items? Object.keys(this.props.items) : []
    return (
      <li className="AcordeonItem">
        <h4>Titulo de Seccion</h4>
        <ul className="ul">
          
          <div className="item-section">
            {blue.map((i,k)=>
            <li key={k}>
              <Item item={i} itemId={i.id} />
            </li>
            )}
          </div> 


          <div className="item-section">
            {green.map((i,k)=>
            <li key={k}>
              <Item item={i} itemId={i.id} />
            </li>
            )}
          </div> 

          <div className="item-section">
            {orange.map((i,k)=>
            <li key={k}>
              <Item item={i} itemId={i.id} />
            </li>
            )}
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
