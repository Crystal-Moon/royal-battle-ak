
function SectionSobreMi() {
  return (
      <section className="Section">
        <h2 className="h2">Version 0.1.0</h2>
        <h3>¿Qué es esta app?
        <img src='https://imgur.com/q6aNDip.png' alt="crystal"
          style={{border: 'none',borderRadius: '50%',width: '8em',margin: '0',float: 'right',}} />
        </h3>
        <p>
          Esta app fue creada como hobby para ayudar a la comunidad de AuraKingdom español, y para practicar programación :v</p>
        
        <h3>¿Quién puede usarla?</h3>
        <p>Cualquier jugador que desee conocer la mecánica del PVP Desafío Divino, que no conozca los ítems o simplemente requiera un 'ayuda-memoria' en el juego.</p>
        
        <h3>¿Este programa es un bot?</h3>
        <p>NO! Esta app no interviene de ninguna manera con los archivos del juego. Tampoco toma control de ningún periférico ni 'lee' lo que suceda en pantalla. No requiere ingresar ningún tipo de información personal. Este programa solo entrega, de manera interactiva, información tomada de fuentes oficiales y públicas.</p>

        <h3>Fuentes</h3>
        <p>Todas la informacion e imagenes son tomadas del sitio <a style={{color:'#6495ed'}} href="https://www.aurakingdom-db.com/" target="_blank">aurakingdom-db.com</a> y de mi propia experiencia dentro del juego.</p>
        
      </section>
  );
}

export default SectionSobreMi;
