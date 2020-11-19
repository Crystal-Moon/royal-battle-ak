import { Component, createRef } from 'react';
import Item from "./Item";
import db from '../util/db';
import { Event } from '../util/Event';

class AcordeonItem extends Component {
  constructor(){
    super();
    this.showSection = this.showSection.bind(this);
    this.hiddenSection = this.hiddenSection.bind(this);

    this.state = { is_show: false }
    this.acordeonItemRef = createRef();
    
    Event.on('showSection', this.hiddenSection);
  }

  componentDidMount(){

  }

  hiddenSection({ref}){
    this.acordeonItemRef.current.classList.remove('show');
    this.setState({ is_show: false })

    if(ref==this.acordeonItemRef){
      if(!this.state.is_show) this.acordeonItemRef.current.classList.add('show');
      this.setState({ is_show: true })
    }
    
  }

  showSection(e){
    if(this.state.is_show){
      this.acordeonItemRef.current.classList.remove('show');
      this.setState({ is_show: false })
    }else
      Event.emit('showSection', { ref: this.acordeonItemRef })
  }


  render() {
    let { blue=[], green=[], orange=[] } = this.props.items;
    let { titleSection='Menu-Section' } = this.props;
    return (
      <li className="AcordeonItem" ref={ this.acordeonItemRef } onClick={ this.showSection } >
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
