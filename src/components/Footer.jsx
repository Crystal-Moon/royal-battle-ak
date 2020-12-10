
import { Component } from 'react';
import '../assets/css/logos.css';

class Footer extends Component {
  render() {
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
      		<span className="tech emoji" title="Neutralino JS 😅🤪 &#128298; &#128560; &#128561; &#128064;" id="neu"></span>
      		<span className="tech emoji" title="Internet Explorer &#127895;&#128148;&#x1F49B;" id="ie"></span>
      	</div>	
      </div>
    );
  }
}

export default Footer;
