
import npcImage from '../assets/imgs/npc.jpg';
import { Component } from 'react';
import db from '../util/db';

import Item from './Item';
import ItemIcon from './ItemIcon';

class SectionRecompensas extends Component {
  constructor(){
    super();
    //this.selectItem = this.selectItem.bind(this)
    this.state = { 
      crystal: {
        name: 'Holy Spirit Crystal',
        desc: 'No canjeable. No se puede poner en banco comun. You can obtain this Rare Crystal through the Divine Trial. You can exchange it with the PVP Trial Quartermaster at the Military Hall in Navea.',
        icon: 'https://cdn.aurakingdom-db.com/file/bb-akdb/images/icons/I00855.png',
        qlty: 'orange'
      }, 
      items: [], 
      caja: {}, 
      cajaItems: [] 
    }
   // Event.on('detailItem',this.selectItem)
  }

  componentDidMount(){
    db.getRewads().then(items=>{
      let caja= items.find(i=>i.id==21)
      this.setState({ items, caja })
    })

    db.getHolySpirit().then(spirits=> 
      this.setState({ cajaItems:spirits }))
  }

  render() {
   return (
    <section className="Section Rewards">
      <h2 className="h2">Recompensas</h2>

      <div className='table-conteiner scrollable'>
        <table className="main">
          <thead><tr><th colSpan="4"><p>Recompensas disponibles</p></th></tr></thead>
          <tbody>
            {
            this.state.items.map((i,k)=>
              <tr key={k}>
                <td className='crystal'><ItemIcon item={this.state.crystal} /></td>
                <td className='txt'>x{i.c1}</td>
                <td><Item item={i} eventname="" hoverup={Boolean(k>this.state.items.length/2)} /></td>
                <td className={ i.qlty } style={{paddingLeft:'1.5em'}}>{ i.name }</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
      <table className="main">
        <thead><tr><th style={{fontSize:'1.6em'}}><ItemIcon item={this.state.caja} /></th><th colSpan="3"><p>caja de holy spirit</p></th></tr></thead>
        <tbody><tr>{this.state.cajaItems.map((i,k)=><td key={k}><Item item={i} hoverup={true} /></td>)}</tr></tbody>
        <tfoot><tr><td colSpan="4"><p>Para conseguir los Holy Spirit en calidad dorada es necesario canjear 6 Holy Spirit del mismo tipo con el NPC. Se tomarán los primeros 6 que se encuentren en el inventario.</p></td></tr></tfoot>
      </table>
    </section>
    );
  }
}

export default SectionRecompensas;
