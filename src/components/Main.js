import { Component } from 'react';
import Nav from "./Nav";
import Principal from "./Principal";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav></Nav>
        <Principal></Principal>
      </div>
    );
  }
}

export default Main;
