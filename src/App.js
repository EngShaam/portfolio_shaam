import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"; 
import Projects from "./Components/Projects/Projects";  
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;