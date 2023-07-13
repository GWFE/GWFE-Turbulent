import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Header from './Header';
import Footer from './Footer';
import Main from './component/Main';
import Detail from './component/Detail';
import Player from './component/Player';
import Weapon from './component/Weapon';


function App() {
  return (
    <div className="App">
      <Header />
      
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/player" element={<Player />} />
          <Route path="/weapon" element={<Weapon />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      
    </div>
  );
}

export default App;
