
// Css
import './assets/css/gral.css';
import './assets/css/royal.css';
import './assets/css/scrollbar.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App(props) {

  return (
    <div className="Todo">
      <Header parent="app" />
      <Main body={props.children} />
      <Footer />
    </div>
  );
}

export default App;
