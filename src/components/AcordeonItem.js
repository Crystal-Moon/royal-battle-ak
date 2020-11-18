import { Component } from 'react';
import Item from "./Item";
import db from '../util/db';

class AcordeonItem extends Component {
  constructor(){
    super();
   // this.state = {
   //   items: []
   // }
    this.showSection = this.showSection.bind(this)
  }

  componentDidMount(){
    /* db.getByType().then(all=>{
      console.log('el all',all)
   
      //this.setState({ items: all })
    })*/
  }

  showSection(e){
    //console.log(e.target)
    e.target.parentNode.classList.toggle('show')
  }

  render() {
  console.log('las props en  acorItem',this.props)
    let { blue=[], green=[], orange=[] } = this.props.items;
    let { titleSection='Menu-Section' } = this.props;
    return (
      <li className="AcordeonItem" onClick={ this.showSection }>
        <h4>{ titleSection }</h4>
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

        </ul>
      </li>
    );
  }
}

export default AcordeonItem;
