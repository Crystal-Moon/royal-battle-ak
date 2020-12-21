
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
          <span>ReactJS</span>    
        </div>  
      </div>
  );
}

export default Footer;