import { Component } from 'react';

import ItemIcon from './ItemIcon';

class Hover extends Component {
  constructor(){
    super();
    this.state = {
        noHover: false
    }
  }

  componentDidMount(){
    /* llamar configuracion de usuario y preguntar por el no-hover */
    this.setState({ noHover: true }) // cargar aqui lo del usuario
  }

  render() {
    //console.log('el prop q llega a hover sin const',this.props);
    const { item={} } = this.props;
    return( 
      <div className={`Hover ${this.state.noHover?'no-hover':''}`} >
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
