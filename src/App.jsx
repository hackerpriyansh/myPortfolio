
import Navbar from './components/Navbar'
import './App.css'
import { Homepage } from './components/Homepage';
import { About } from './components/About';
import { Work } from './components/Work';
import { Tools } from './components/Tools';
import {React , useState, useEffect} from 'react';
import Contact from './components/Contact';

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
        <Homepage isMobile={isMobileDevice}/>
        <Work isMobile={isMobileDevice}/>
        <About isMobile={isMobileDevice}/>
        <Tools isMobile={isMobileDevice} />
        <Contact isMobile={isMobileDevice}/>
      </div>
    </>
  )
}

export default App
