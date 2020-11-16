import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      	<div>
      		<span>Made with love by</span>
      		<span className="tech" id="CM_logo"></span>
      		<span id="Name">CrysalMoon</span>
      	</div>
      	<div>
      		<span>Powered by</span>
          <span className="tech" title="ReactJS" id="react"></span>
      		<span className="tech" title="Electron" id="electron"></span>
      		<span className="tech" title="Google Chrome" id="ggl"></span>
      	</div>	
      </div>
    );
  }
}

export default Footer;
