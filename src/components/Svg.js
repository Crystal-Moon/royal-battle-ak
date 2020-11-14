import { Component } from 'react';
//import Vivus from 'vivus';

import LineUp from './LineUp';
import LineDown from './LineDown';

class MapItems extends Component {
  constructor() {
        super();
  }
  componentDidMount(){
       // new Vivus('svg-map-items', {duration: 200},()=>{});
  }   


  render() {
    return (
     
  		  <svg className="Svg" id='svg-map-items'>
         
          <line x1="50%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x1" from="50%" to="50%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
            <animate attributeName="stroke" from="#808080" to="#008000" dur="0.5s" repeatCount="1" fill="freeze" />
          </line>
          <line x1="75%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x1" from="50%" to="75%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
            <animate attributeName="stroke" from="#808080" to="#008000" dur="0.5s" repeatCount="1" fill="freeze" />
          </line>
          <LineUp />


          <line x1="50%" y1="50%" y2="95%" x2="20%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="20%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
            <animate attributeName="stroke" from="#808080" to="#008000" dur="0.5s" repeatCount="1" fill="freeze" />
          </line>
          <line x1="50%" y1="50%" y2="95%" x2="40%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="40%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
            <animate attributeName="stroke" from="#808080" to="#008000" dur="0.5s" repeatCount="1" fill="freeze" />
          </line>
          <line x1="50%" y1="50%" y2="95%" x2="60%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="60%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
            <animate attributeName="stroke" from="#808080" to="#008000" dur="0.5s" repeatCount="1" fill="freeze" />
          </line>
          <LineDown />


        </svg>
     
    );
  }
}

export default MapItems;
/*
 <line x1="25%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50" to="100" begin="1s" dur="2s" repeatCount="indefinite"/> 
            <animate attributeName="y2" from="50" to="100" begin="1s" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="50%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="75%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow" />

          <line x1="50%" y1="50%" y2="95%" x2="20%" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50%" y1="50%" y2="95%" x2="40%" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50%" y1="50%" y2="95%" x2="60%" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50%" y1="50%" y2="95%" x2="80%" stroke="green" stroke-width="4" fill="yellow" />

          */

/*

<svg className="Svg" id='svg-map-items'>
          <line x1="50" y1="50" x2="25" y2="5" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50" y1="50" x2="50" y2="5" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50" y1="50" x2="75" y2="5" stroke="green" stroke-width="4" fill="yellow" />

          <line x1="50" y1="50" y2="95" x2="20" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50" y1="50" y2="95" x2="40" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50" y1="50" y2="95" x2="60" stroke="green" stroke-width="4" fill="yellow" />
          <line x1="50" y1="50" y2="95" x2="80" stroke="green" stroke-width="4" fill="yellow" />
        </svg>

        */

/*

<line x1="25%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x1" from="50%" to="25%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
          </line>
          <line x1="50%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x1" from="50%" to="50%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
          </line>
          <line x1="75%" y1="5%" x2="50%" y2="50%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x1" from="50%" to="75%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y1" from="50%" to="5%" dur="0.5s" repeatCount="1" />
          </line>
          <LineUp />


          <line x1="50%" y1="50%" y2="95%" x2="20%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="20%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
          </line>
          <line x1="50%" y1="50%" y2="95%" x2="40%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="40%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
          </line>
          <line x1="50%" y1="50%" y2="95%" x2="60%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="60%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
          </line>
          <line x1="50%" y1="50%" y2="95%" x2="80%" stroke="green" stroke-width="4" fill="yellow">
            <animate attributeName="x2" from="50%" to="80%" dur="0.5s" repeatCount="1" />
            <animate attributeName="y2" from="50%" to="95%" dur="0.5s" repeatCount="1" />
          </line>

          */