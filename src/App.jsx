
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './pages/Homepage'
import {
  Routes, Route, BrowserRouter as Router,
} from "react-router-dom";
import About from './pages/About';
import { useState, useEffect } from 'react';

const App = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };
    setIsMobileDevice(checkIsMobile());
    const handleResize = () => {
      setIsMobileDevice(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage isMobile={isMobileDevice}/> } />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>

    </>
  )
}

export default App
