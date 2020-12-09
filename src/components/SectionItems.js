
import '../assets/css/main.css';
import { Component } from 'react';

import db from '../util/db';
import {Event} from '../util/Event';

import Item from './Item';
import ItemIcon from './ItemIcon';
import Hover from './Hover';




class SectionItems extends Component {
  constructor(){
    super();
    this.selectItem = this.selectItem.bind(this)
    this.state = { items:[], selected: {} }
    Event.on('detailItem',this.selectItem)
  }

  componentDidMount(){
    db.getAllArray().then(items=>{
      //let items = all.potas.blue.concat(all.potas.green).concat(all.equipo.blue).concat(all.equipo.green).concat(all.equipo.orange).concat(all.eido.blue).concat(all.eido.green)
     // console.log('el items',all)
      this.setState({ items, selected: items[0] })
    })
   /* db.getHolySpirit().then(items => {
      console.log('items',items)
      this.setState({ items })
    })*/
  }

  selectItem({ id, ref }){
    console.log('en select item', id, ref)
    db.getById(id).then(selected=> this.setState({ selected }))
  }

/* aqi tendre un event.on para mostrar en el costado */
  
  render() { /* a los Item de aqui establecer el eventname en 'detail' para manejarlos diferentes eq en acordeonItems */
    return (
      <section className="Section SectionItems">
        <h2 className="h2">seccion itens</h2>
        <table className="main">
          <tbody>
            <tr>
              <td>
            <div className="table-conteiner scrollable scrollable-in">
                <table className="sub">
                  <thead><tr><th colSpan="2"><p>Recompensas disponibles</p></th></tr></thead>
                  <tbody>
                  {
                    this.state.items.map((i,k)=>
                      <tr key={k}>
                        <td><Item item={i} eventname="detailItem" /></td>
                        <td><p className={i.qlty}>{i.name}</p></td>
                      </tr>
                    )
                  }
                  </tbody>
                </table>
          </div>
              </td>
              <td className="w50 detail-item">
                <Hover item={this.state.selected} />   
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default SectionItems;
