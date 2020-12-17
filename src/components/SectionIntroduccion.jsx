
import News from './News';

function SectionIntroduccion(){
  return (
      <section className="Section">
        <News />
        <h2>Introducción</h2>
        <p><img src='https://www.dropbox.com/s/hcttuiiklfm51jr/star_caller.jpg?dl=1' alt="chibi" className="imgs" style={{float:'right',width:'20em'}} /> 
        Con la llegada del parche 56, además de la nueva clase, Estrella Cósmica, también llegó un nuevo 
        pvp estilo Battle Royal. En pocas palabras: "el último que quede en pie".</p>
        <p>Todos los jugadores empiezan con el mínimo de recursos y equipamiento y deben ir consiguiendo 
          mejores objetos mientras son desafiados constantemente por los otros jugadores y por una constante 
          reducción de "área segura" (el campo de juego se hace más pequeño).</p>
        <p>Participando en esta arena puedes llegar a obtener una nueva pieza de equipamiento: El Espíritu 
          Luminoso. Un accesorio que está disponible para usar desde el nivel sup. 1.</p>
        <p>La naturaleza aleatoria del punto de partida, la ubicación de los elementos y la reducción 
          del área segura, convierte este género de pvp en un desafío de pensar y reaccionar rápidamente 
          y mejorar las estrategias durante el juego para ser el último que quede vivo.</p>
        <p>Para eso mismo fue creado este programa tipo 'helper'. En este sitioweb compilo los items 
          disponibles dentro del campo y las combinaciones disponibles, presentados en forma interactiva.</p>
        <p>Espero lo disfrutes y hagas un buen uso de ello.</p>
        <img src='https://www.dropbox.com/s/g4jp7h6269xm2hg/divine_trial.jpeg?dl=1' alt="divine_trial" className="imgs" style={{width:'90%',margin:'auto'}} />
      </section>
  );
}

export default SectionIntroduccion;
