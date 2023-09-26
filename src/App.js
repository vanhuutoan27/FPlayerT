import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Main from './components/Main';
import Detail from './components/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
