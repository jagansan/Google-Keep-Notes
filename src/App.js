import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleChat from './components/pages/GoogleChat';

import {Routes, Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
        <Routes>
          <Route path="/" Component={GoogleChat} />
        </Routes>
      {/* <Footer />       */}
    </div>
  );
}

export default App;
