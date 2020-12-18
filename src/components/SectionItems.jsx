
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
      this.setState({ items, selected: items[30] })
    })
  }

  selectItem({ id, ref }){
    db.getById(id).then(selected=>{
      let i=selected.made_by.map(m=>m.id);
      let m={}
      selected.made_by=Array.from(new Set(selected.made_by.map(JSON.stringify))).map(JSON.parse);
      i.forEach((n)=> m[String(n)] = (m[String(n)] || 0) + 1 );
      selected.by=m;
      this.setState({ selected })
    })
  }

  render() {
    return (
      <section className="Section SectionItems">
        <h2 className="h2">Items</h2>
        <p>En este apartado podrás ver todos los items que hay dentro de la arena y su descripción.</p>
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
