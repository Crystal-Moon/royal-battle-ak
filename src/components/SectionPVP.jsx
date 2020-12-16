import { Component } from 'react';

class SectionPVP extends Component {
  render() {
    return (
      <section className="Section">
        <h2 className="h2">Desafio Divino</h2>
        <h3>Inscripción</h3>
        <p>Podrás anotarte para la arena desde el icono de espadas cruzadas del 
          minimapa cuando abra la inscripción en el horario preestablecido. Debes 
          ser nivel 90 o superior y tener al menos 12 espacios libres en la mochila. 
          Hay dos botones para entrar: "Multijugador" y "1J".</p>
        <p>El "modo individual" luchas en solitario, todos contra todos, y en "modo 
        equipo" luchas en grupos de 3 a 5 jugadores. El líder del grupo debe solicitar 
        la entrada a la arena.</p>
        <p>Cuando te anotes verás un pequeño contador en la pantalla. Una vez se 
          alcancen 20 jugadores (modo 1J), o 7 grupos (modo multi), se transportarán 
          automáticamente al área de espera. El máximo de jugadores individuales es 
          40 y el máximo de grupos por arena es 10.</p>
        <img src="" alt="contador_ingreso" />
        <p>Cuando ingreses a la zona de espera, tendrás un tiempo de preparación 
          de 5 minutos. Todos los jugadores tendrán las mismas stats y la barra de 
          skill cambia una genérica con skills básicos de supervivencia.</p>
        <p>La mochila y otras funciones se desactivan y los elementos adquiridos 
          en el campo de batalla se colocarán automáticamente en un acceso directo 
          dedicado.</p>
        <p>Puedes mover esta barra de accesos directos desbloqueando el candadito 
          que está a la derecha de la misma.</p>
        <p>Los elementos se pueden utilizar haciendo click con el botón derecho del 
          ratón y se pueden tirar al suelo arrastrándose fuera del marco de acceso 
          directo.</p>
        <img src="" alt="accessos_directos" />

        <h3>La partida</h3>
        <p>Pasado el tiempo de preparación, todos los participantes serán 
          transportados a la aeronave y comenzará el evento.</p>
        <p>El jugador recibe un efecto de escudo al inicio que se pierde una vez 
          ataques a un objeto, un monstruo u a otro jugador.</p>
        <p>Hay varias cajas de suministros, capullos de insectos, cristales, etc. 
          en el campo de batalla. Puedes reconocerlos por el brillo dorado que tienen.
           Los jugadores pueden adquirir varios elementos destruyéndolos con sus 
           habilidades.</p>
        <p>También hay varios tipos de monstruos que no te atacarán a menos que 
          tu lo hagas primero.</p>
        <img src="" alt="obj_battle" />

        <p>Los artículos son principalmente equipos que aumentan las habilidades, 
          recetas que fabrican artículos, pociones para recuperar HP y piedras 
          transformadoras para convertirte en diversos eidolons.</p>
        <p>Si te encuentras con poca vida, dirige tu vista a los jarrones blancos. 
          Solo estos sueltan potas para curarte.</p>
        <img src="" alt="jarron_potas" />
        <p>Todo lo que recolectes se colocara en la barra de accesos directo, se 
          precavido, solo tienes 12 espacios, los ítem iguales se acumulan y 
          cuando los descartes se restan (no se descartan todos juntos, uno a la vez).</p>
        <p>Ten en cuenta que no puedes seleccionar a los enemigos ni objetos, 
          así que apunta bien tu personaje antes  de lanzar algún ataque.</p>
        <p>Los nombres de monstruos, objetos de suministro y otros personajes 
          desaparece, tampoco puedes ver sus barras de vida.</p>

        <h3>Uso de los items</h3>
        <p>Al utilizar los ítems estos aparecen como un buff en tu barra de 
          estados y desaparece de tu barra-mochila. Los ítems iguales no se 
          acumulan en el buff. Si tienes más de uno del mismo solo se descontará 
          uno al usarlo.</p>
        <p>Al usar una piedra transformadora, te convertirás en un eidolon y 
          tu barra de skills cambiará por ataques correspondientes al eidolon usado. 
          Las piedras se consumen, si cambias de transformación tendrás que 
          conseguir o fabricar otra piedra. Podras usar una cada 50 segundos.</p>

        <img src="" alt="transformado_en_eido" />

        <p>Los objetos del mapa mayormente dropean ítems de calidad azul y 
          piedras transformadoras de eidolons de calidad azul. También hay un 
          probabilidad de que suelten piedras transformadora de eidolon de 
          calidad verde</p>
        <p>Los monstruos dropean fórmulas para ítems de calidad verde, items 
          verdes ya armados. También pueden llegar a soltar fórmulas para equipo 
          naranja y fórmulas para piedras de eidolon calidad naranja.</p>
        <p>Hay cinco jefes repartidos en el mapa. Cualquiera de ellos puede 
          dropear fórmulas para equipo y eidolons calidad naranja, o ítems y 
          piedras transformadoras naranjas ya armados. Cuestión de suerte.</p>
        <p>Puedes tomar ítems del suelo que hayan sido descartados por otros. 
          Cuando mueres todos tus items quedan a disposición de los demás en 
          el suelo.</p>
        <p>Para crear items de mejor calidad si o si necesitaras la fórmula y 
          la cantidad de items que pide. También necesitarás un espacio extra 
          en tu barra-mochila para colocar el item creado.</p>

        <h3>Area segura</h3>
        <p>Hay una barrera circular violeta alrededor del campo de batalla que 
          podrás verla en el mapa y minimapa. Si sales de la barrera, el gas 
          venenoso te dañará y moriras en segundos.</p>
        <p>Además, la barrera se reduce con el tiempo y el área donde los 
          jugadores pueden sobrevivir disminuye constantemente.</p>

        <img src="" alt="barrera_mapa" />

        <p>Si no puede moverse debido a problemas en el terreno, puede escapar 
          usando la "Piedra Teletransportadora de Gea".</p>
        <p>En el campo de batalla, todos menos los miembros del grupo, son 
          enemigos, y la clasificación se realiza según el orden de muerte. 
          Cuanto más tiempo sobrevivas dentro de la arena, más alto será tu rango.</p>

        <h3>Final</h3>
        <p>Las recompensas llegan por correo una vez que termine la partida. 
          Aunque mueras a poco de entrar deberás esperar a que termine la partida 
          para que se envíen los premios.</p>
        <p>Al morir tienes la opción de salir de la arena y anotarte para otra 
          ronda si aun no termino el tiempo de inscripción.</p>

        <p>Los horarios son:</p>
        <table>
          
        </table>
      </section>
    );
  }
}

export default SectionPVP;
