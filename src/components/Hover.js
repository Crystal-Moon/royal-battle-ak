import { Component } from 'react';

import ItemIcon from './ItemIcon';

class Hover extends Component {
  render() {
    //console.log('el prop q llega a hover sin const',this.props);
    const { item={} } = this.props;
    return( 
      <div className="Hover">
    	<div className="item-head">
            <span>
                <ItemIcon item={ item } />
            </span>
            <span className="item-name">{ item.name }</span>
        </div>  

        <div className="item-body">
            <hr />
            <p className="stat">{ item.desc }</p>
            <hr />
        </div>
    </div>
    );
  }
}

export default Hover;
