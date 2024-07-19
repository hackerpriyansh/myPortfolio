
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './pages/Homepage'
import {
  Routes, Route, BrowserRouter as Router,
} from "react-router-dom";
import About from './pages/About';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>

    </>
  )
}

export default App
