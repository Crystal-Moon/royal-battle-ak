
function SectionModeInGame() {
  return (
      <section className="Section">
        <h2 className="h2">Modo In-Game</h2>
        <p>Esta app está diseñada para acompañarte durante el juego.</p>
        <p>En la esquina superior derecha se encuentra un interruptor para entrar al modo In-Game. Al encenderlo se abrirá una pequeña ventana dividida en secciones según los tipos de items disponibles de la arena.</p>
        <p>Esta mini ventana es algo especial... Utiliza comandos del sistema operativo para permanecer siempre a la vista, incluso sobre otras ventanas.</p>
        <p>Al seleccionar cada ítem, este se 'desglosa' en lo necesario para su creación y los ítems de mejor calidad que se pueden hacer con él.</p>
        <img src='https://imgur.com/2u3mhG9.png' alt="map_items" className="imgs c" />

        <p>En caso de necesitar más de un elemento del mismo tipo, los ítems aparecen repetidos para simplificar una vista rápida.</p>
        <img src="https://imgur.com/6pj8atR.png" alt="items_dobles" className="imgs c" />

        <p>Puedes ver todas las descripciones al pasar el mouse encima de los ítems. Una vez que ya los conoces puedes desactivar esta función con la opción 'ocultar detalles'</p>
        <p>Eres medio ciego como yo? puedes personalizar los tamaños con la función de zoom.</p>
        <img src="https://imgur.com/kiIqprz.png" alt="config_options" className="imgs c" />

        <p>¿No funciona la función de siempre visible? Sigue estos simples pasos para configurarlo.<br />
        1- Abre la carpeta donde se instalo el programa. <br/>
        2- Ejecuta en modo administrador el archivo 'onTop_B.exe'<br/>
        3- Selecciona la mini ventana para que se posicione sobre todo lo demás <br/>
        4- Presiona Ctrl + J. Verás un mensaje indicando que se configuró correctamente. <br/>
        5- Puedes volver a presionar Ctrl + J para desactivar el modo siempre visible.</p>

        <p>Yapa!. Puedes usar 'onTop_B.exe' con cualquier ventana que desees, no solamente esta aplicación.</p>
      </section>
  );
}

export default SectionModeInGame;
