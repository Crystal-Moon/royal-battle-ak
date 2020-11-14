import { Component } from 'react';

import ItemIcon from './ItemIcon';

class Hover extends Component {
  render() {
    return( 
      <div className="Hover">
    	<div className="item-head">
            <span>
                <ItemIcon />
            </span>
            <span className="item-name">Brazalete Progresivo de Pruebas de React</span>
        </div>  

        <div className="item-body">
            <hr />
            <p className="stat">DMG +8% and Skill Cooldown -15%.</p>
            <hr />
        </div>
    </div>
    );
  }
}

export default Hover;
