import { Component } from 'react';

import LineUp from './LineUp';
import LineDown from './LineDown';

function MapItems(props) {
  const { made_by=[], mat_for=[] } = props;
  return (
  		  <svg className="Svg">
          {
            mat_for.map((i,k)=> <LineUp key={k} item={i} x={100 / (mat_for.length+1) * (k+1)} />)
          }
          {
            made_by.map((i,k)=> <LineDown key={k} item={i} x={100 / (made_by.length+1) * (k+1)} />)
          }
        </svg>
  );
}

export default MapItems;
