
import { Component, createRef } from 'react';
import { Event } from '../util/Event';

import Item from './Item';

class AcordeonItem extends Component {
  constructor(props){
    super(props);
    this.showSection = this.showSection.bind(this);
    this.hideSection = this.hideSection.bind(this);
    this.state = { is_show: false }
    this.acordeonItemRef = createRef();
    
    Event.on('showSection', this.hideSection);
  }

  componentDidMount(){}

  hideSection({ref}){
    this.acordeonItemRef.current.classList.remove('show');
    this.setState({ is_show: false })

    if(ref==this.acordeonItemRef){
      if(!this.state.is_show) this.acordeonItemRef.current.classList.add('show');
      this.setState({ is_show: true })
    }
  }

  showSection(e){
    e.stopPropagation();
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
      <li className="AcordeonItem" ref={ this.acordeonItemRef }  >
        <h4 onClick={ this.showSection } >{ titleSection }</h4>
        <ul className="ul">
          
          <div className="item-section">
            {blue.map((i,k)=>
            <li key={k}>
              <Item item={i} eventname='desglose' />
            </li>
            )}
          </div>

          <div className="item-section">
            {green.map((i,k)=>
            <li key={k}>
              <Item item={i} eventname='desglose' />
            </li>
            )}
          </div> 

          <div className="item-section">
            {orange.map((i,k)=>
            <li key={k}>
              <Item item={i} eventname='desglose' />
            </li>
            )}
          </div>

        </ul>
      </li>
    );
  }
}

export default AcordeonItem;
