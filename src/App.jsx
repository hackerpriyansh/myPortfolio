
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './components/Homepage'
import About from './components/About';
import Work from './components/Work';

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
      <div className="wrapper">
        <Navbar />
        <Homepage isMobile={isMobileDevice} />
        <Work isMobile={isMobileDevice}/>
        <About />
      </div>
    </>
  )
}

export default App
