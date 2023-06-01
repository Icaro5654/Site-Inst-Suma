import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


//Pages
import About from "./pages/About/About";
import Project from './pages/Project/Project';
import Home from "./pages/Home/Home";
import Contact from './pages/Contact/Contact';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" />
            <Route path="/home" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
