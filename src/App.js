
import './App.css';
import React, {useState} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import projects from './data.js';
import Header from './components/Header/Header';
import Projects from './pages/Projects/Projects';
import ParticleBackground from './components/ParticleBackground/ParticleBackground.jsx';
import Footer from './components/Footer/Footer';
import particlesConfig from './components/particles-config';



function App() {

  const [fondoClaro, setFondoClaro] = useState(false)

  const handleFondoClaro = ()=>{
    setFondoClaro(!fondoClaro)
  }

  const fondoColor = fondoClaro ? "#FFFFFF" : "#000000";

  const config = particlesConfig(fondoColor);

  return (
      <Router>
        <ParticleBackground fondoColor={fondoColor}/>
        <Header handleFondoClaro={handleFondoClaro}/>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
        </Routes>
        <Footer />
      </Router>
      
  );
}

export default App;