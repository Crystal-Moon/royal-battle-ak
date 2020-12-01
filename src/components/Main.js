import { Component } from 'react';
import Nav from "./Nav";
import Principal from "./Principal";

class Main extends Component {
  render() {
  	const { body } = this.props;

    return (
      <div className="Main">
        <Nav />
        <Principal body={body} />
      </div>
    );
  }
}

export default Main;
