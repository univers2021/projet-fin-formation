import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Movies from './Component/Movies'
import Contact from "./Component/Contact";
import NavBar from "./Component/NavBar";



function App() {
  return (
    
      <Routes>
        
        <Route path="/NavBar" element={<NavBar/>} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Movies" element={<Movies />} />
        
      </Routes>
    
  );
}

export default App;
