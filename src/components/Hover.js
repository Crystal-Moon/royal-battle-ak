import { Component } from 'react';

import ItemIcon from './ItemIcon';

class Hover extends Component {
  constructor(){
    super();
   /* this.state = {
        noHover: false
    }*/
  }

  componentDidMount(){
    /* llamar configuracion de usuario y preguntar por el no-hover */
 //   this.setState({ noHover: true }) // cargar aqui lo del usuario
  }

  render() {
    //console.log('el prop q llega a hover sin const',this.props);
    const { item={}, hoverup=false } = this.props;
    return( 
      <div className={`Hover ${hoverup?'hover-up':''}`} >
    	<div className="item-head">
            <span>
                <ItemIcon item={ item } />
            </span>
            <span className={`item-name ${ item.qlty }`}>{ item.name }</span>
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
