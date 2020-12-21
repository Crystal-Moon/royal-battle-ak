
import '../assets/css/logos.css';

function Footer() {
  return (
      <div className="Footer">
        <div>
          <span>Made with love by</span>
          <span className="tech emoji" id="CM_logo"></span>
          <span id="Name">CrystalMoon</span>
        </div>
        <div>
          <span>Powered by</span>
          <span className="tech emoji" title="React JS" id="react"></span>
          <span className="tech emoji" title="Neutralino JS" id="neu"></span>
          <span className="tech emoji" title="Internet Explorer &#128560;" id="ie"></span>
        </div>  
      </div>
  );
}
/* poner link del landing luego de el icon de react */
export default Footer;