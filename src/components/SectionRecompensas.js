
import npcImage from '../assets/imgs/npc.jpg';
import { Component } from 'react';
import db from '../util/db';

import Item from './Item';
import ItemIcon from './ItemIcon';

class SectionRecompensas extends Component {
  constructor(){
    super();
    //this.selectItem = this.selectItem.bind(this)
    this.state = { crystal:{}, items:[], caja:{}, cajaItems:[] }
   // Event.on('detailItem',this.selectItem)
  }

  componentDidMount(){
    db.getRewads().then(items=>{
     // console.log('el items',all)
      let caja= items.find(i=>i.id==21)
      this.setState({ items, caja })
    })
    db.getAll().then(all=>{
     // console.log('el items',all)
      this.setState({ cajaItems: all.spirit.orange })
    })
   /* db.getHolySpirit().then(items => {
      console.log('items',items)
      this.setState({ items })
    })*/
  }

  render() {
    return (
      <section className="Section Rewards">
        <h2 className="h2">Recompensas</h2>
        <table className="main">
          <tbody>
            <tr>
              <td className="w50">
                
                <table className="sub">
                  <thead><tr><th colSpan="2"><p>Recompensas disponibles</p></th></tr></thead>
                  <tbody>
                    {
                      this.state.items.map((i,k)=>
                        <tr key={k}>
                          <td><Item item={i} eventname="" /></td>
                          <td>
                            <ItemIcon item={this.state.crystal} />
                            <span>x{i.c1}</span>
                            </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>

              </td>
              <td className="w50">
                <img src={npcImage}alt="npc" className="npc" />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="main">
          <thead><tr><th><ItemIcon item={this.state.caja} /></th><th colSpan="3"><p>caja de holy spirit</p></th></tr></thead>
          <tbody><tr>{this.state.cajaItems.map((i,k)=><td key={k}><Item item={i} /></td>)}</tr></tbody>
          <tfoot><tr><td colSpan="4"><p>Para conseguir los Holy Spirit en calidad dorada es necesario canjear 6 Holy Spirit del mismo tipo con el NPC. Se tomarán los primeros 6 que se encuentren en el inventario.</p></td></tr></tfoot>
        </table>
      </section>
    );
  }
}

export default SectionRecompensas;
