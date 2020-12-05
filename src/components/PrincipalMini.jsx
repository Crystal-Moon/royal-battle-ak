import { Component } from 'react';
import Header from './Header';
import AcordeonMenu from './AcordeonMenu';
import MapItems from './MapItems';

class PrincipalMini extends Component {
  render() {
    return (
      <div className="PrincipalMini">
        <Header />
        <AcordeonMenu />
        <MapItems />
      </div>
    );
  }
}

export default PrincipalMini;
 /*
         <div className="Menu">
          <Acordeon></Acordeon>
        </div>
        */