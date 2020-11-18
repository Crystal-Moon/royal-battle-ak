import { Component } from 'react';

import leftArrow from '../assets/imgs/left-arrow.svg'

class LeftBar extends Component {
  render() {
    return (
      <div className="LeftBar">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="255.000000pt" height="364.000000pt" viewBox="0 0 255.000000 364.000000"
            preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,364.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M1903 3625 c-145 -40 -112 -11 -1043 -941 l-865 -864 865 -864 c936
                  -935 900 -903 1047 -941 253 -66 521 81 614 335 35 96 34 238 -3 337 -15 40
                  -41 94 -59 120 -18 26 -246 263 -508 525 -262 263 -476 482 -476 488 0 5 216
                  227 481 492 267 269 494 505 511 533 52 83 78 177 78 280 0 216 -119 391 -325
                  479 -81 35 -233 45 -317 21z"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default LeftBar;


/*

 <div className="LeftBar">
        <img src={ leftArrow } alt="<" />
      </div>

      */