import { Component } from 'react';
//import Vivus from 'vivus';

import LineUp from './LineUp';
import LineDown from './LineDown';

class MapItems extends Component {

  render() {
    const { BY=[], FOR=[] } = this.props;
    return (
     
  		  <svg className="Svg" id='svg-map-items'>
         
          {
            FOR.map((i,k)=> <LineUp key={k} item={i} x={100 / (FOR.length+1) * (k+1)} />)
          }
          {
            BY.map((i,k)=> <LineDown key={k} item={i} x={100 / (BY.length+1) * (k+1)} />)
          }

        </svg>
     
    );
  }
}

export default MapItems;
