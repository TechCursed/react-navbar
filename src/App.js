import NavBootstrap from './components/NavBootstrap';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    
    // all the route must be enclosed within Routes tag followed by the Router
    <Router>
       <NavBootstrap />

       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
       </Routes>

    </Router>
      


  );
}

export default App;
