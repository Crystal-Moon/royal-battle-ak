
import './assets/css/gral.css';
import './assets/css/royal.css';
import './assets/css/scrollbar.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App(props) {
  const { children } = props;
  return (
      <div className="Todo" >
        <Header />
        <Main body={children} />
        <Footer />
      </div>
  );
}

export default App;
