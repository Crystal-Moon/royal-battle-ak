import { Component } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Todo;
