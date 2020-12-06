import { Component } from 'react';
import userConfig from '../util/configUser';
import { Event } from '../util/Event';

import ItemIcon from './ItemIcon';

class Hover extends Component {
  constructor(props){
    super(props);
    this.handlerNoHover = this.handlerNoHover.bind(this);
    this.state = {
        hover: userConfig.get('hover')
    }
    Event.on('hover',this.handlerNoHover)
  }

  componentDidMount(){
    /* llamar configuracion de usuario y preguntar por el no-hover */
  //  let hover = userConfig.get('hover') || true
  //  this.setState({ hover }) // cargar aqui lo del usuario
  }

  handlerNoHover(hover){
    this.setState({ hover })
    //userConfig.set('hover', hover)
  }

  render() {
    //console.log('el prop q llega a hover sin const',this.props);
    const { item={} } = this.props;
    return( 
      <div className={`Hover ${this.state.hover?'':'no-hover'}`} >
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
