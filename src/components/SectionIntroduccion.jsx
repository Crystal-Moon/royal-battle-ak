import { Component } from 'react';

class SectionIntroduccion extends Component {
  render() {
    return (
      <section className="Section">
        <h2 className="h2">Noticias</h2>
        <News />
        <h3>Introducción</h3>
        <p><img src="" alt="chibi" />> Con la llegada del parche 56, además de la nueva clase, Estrella Cósmica, también llegó un nuevo pvp estilo Battle Royal. En pocas palabras: "el último que quede en pie".</p>
        <p>Todos los jugadores empiezan con el mínimo de recursos y equipamiento y deben ir consiguiendo mejores objetos mientras son desafiados constantemente por los otros jugadores y por una constante reducción de "área segura" (el campo de juego se hace más pequeño).</p>
        <p>Participando en esta arena puedes llegar a obtener una nueva pieza de equipamiento: El Espíritu Luminoso. Un accesorio que está disponible para usar desde el nivel sup. 1.</p>
        <p>La naturaleza aleatoria del punto de partida, la ubicación de los elementos y la reducción del área segura, convierte este género de pvp en un desafío de pensar y reaccionar rápidamente y mejorar las estrategias durante el juego para ser el último que quede vivo.</p>
        <p>Para eso mismo fue creado este programa tipo 'helper'. No puedo ofrecer la ubicación de cada item pero en este programa compilo los items disponibles dentro del campo y las combinaciones disponibles presentados en forma interactiva.</p>
        <p>Espero lo disfrutes y hagas un buen uso de ello.</p>
        <img src=''alt="some img1" />
      </section>
    );
  }
}

export default SectionIntroduccion;
