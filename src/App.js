import { useEffect } from 'react';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import './App.scss';
import About from './containers/about';
import Home from './containers/home';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Certification from './containers/certifications';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import './index.css';
import particles from './utils.js/particles';

function App() {

  const location=useLocation();
  useEffect(() => {
    initParticlesEngine(loadFull);
  }, []);

  const renderParticleJsInHomePage=location.pathname==="/";

  return (
    <div className="App">
      {/* Particles JS */}

      {
        renderParticleJsInHomePage &&
        <Particles id="particles" options={particles} /> 
      }
      
  
      {/* Navbar */}
      <NavBar />

      {/* Main page content */}
      <div className='App__main-page-content'>


        
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
