
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
     // items=items;
      this.setState({ items, selected: items[0] })
    })
   /* db.getHolySpirit().then(items => {
      console.log('items',items)
      this.setState({ items })
    })*/
  }

  selectItem({ id, ref }){
    console.log('en select item', id, ref)
    //db.getById(id).then(selected=> this.setState({ selected }))
    db.getById(id).then(selected=>{
      //var x = [1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 5, 5, 6];
      let i=selected.made_by.map(m=>m.id);
      let m={}
      //var indices = new Array(i.length).fill(0);
      selected.made_by=Array.from(new Set(selected.made_by.map(JSON.stringify))).map(JSON.parse);
      
      //console.log('el select simple 1', selected.made_by)      
      i.forEach((n)=> m[String(n)] = (m[String(n)] || 0) + 1 );
      selected.by=m;
      //console.log('i resumen',m)
      this.setState({ selected })

    })
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
                  <thead><tr><th colSpan="2"><p>Items de la arena</p></th></tr></thead>
                  <tbody>
                  {
                    this.state.items.filter(i=>i.type!='formula').map((i,k)=>
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
              {this.state.selected.name?
              <td className="w50 detail-item">
                <div className="for-by"> 
                  <span>Creado por</span>
                  <hr/>  
                  <div>
                    {
                    this.state.selected.made_by.map((i,k)=>
                      <>
                      <ItemIcon item={i} key={k} />
                      <span key={(k+1)*10}>x{this.state.selected.by[String(i.id)]}</span>
                      </>)
                    }
                  </div>
                </div>
                <Hover item={this.state.selected} /> 
                <div className="for-by">
                  <span>Material para</span>
                  <hr/> 
                  <div>
                    {
                    this.state.selected.mat_for.map((i,k)=><Item key={k} item={i}/>)
                    }
                  </div>
                </div>
              </td>
              :
              <td className="w50 detail-item"><span>select item</span></td>
              }
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default SectionItems;
