import { Component } from 'react';
import AcordeonItem from "./AcordeonItem";

class Acordeon extends Component {
  render() {
    return (
      <ul className="Acordeon ul">
        <AcordeonItem></AcordeonItem>
        <AcordeonItem></AcordeonItem>
      </ul>
    );
  }
}

export default Acordeon;
