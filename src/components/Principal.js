import { Component } from 'react';
import SectionIntroduccion from "./SectionIntroduccion";
import SectionPVP from "./SectionPVP";
import SectionItems from "./SectionItems";
import SectionRecompensas from "./SectionRecompensas";
import SectionSobreMi from "./SectionSobreMi";

class Principal extends Component {
  render() {
    return (
      <article className="Principal">
        <SectionIntroduccion></SectionIntroduccion>
        <SectionPVP></SectionPVP>
        <SectionItems></SectionItems>
        <SectionRecompensas></SectionRecompensas>
        <SectionSobreMi></SectionSobreMi>
        {}
      </article>
    );
  }
}

export default Principal;
