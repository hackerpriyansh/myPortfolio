import { useState, useEffect } from 'react'
import heroAnim from '../assets/heroAnim.json'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion';

export const Homepage = ({ isMobile }) => {
    const [cursorVariant, setCursorVariant] = useState("default");


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          let hoveredElement = e.target;
          while (hoveredElement && !hoveredElement.classList.contains('leftSection') && !hoveredElement.classList.contains('form-cantainer')) {
            hoveredElement = hoveredElement.parentElement;
          }
    
          if (hoveredElement && hoveredElement.classList.contains('leftSection')  && !hoveredElement.classList.contains('form-cantainer')) {
            setCursorVariant('text');
          } else {
            setCursorVariant('default');
          }
        };
    
        window.addEventListener('mousemove', mouseMove);
        return () => {
          window.removeEventListener('mousemove', mouseMove);
        };
      }, []);
    const variants = {
        default: {
            x: mousePosition.x - 130,
            y: mousePosition.y - 10,
            backgroundColor: 'black',
            transition: {
                type: "smooth",
                duration: 0,
            },
        },
        text: { 
            x: mousePosition.x - 130,
            y: mousePosition.y - 10,
            backgroundColor: '#fed34d',
            mixBlendMode: 'difference',
            height: 50,
            width: 50,
            transition: {
                type: "smooth",
                duration: 0,
            },
        },
    }
    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default')


    return (

        <section className='heroSection' id="home">
            <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className={`col-md-6 leftSection ${isMobile ? 'p-3' : ''}`} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className='heroLeftSection'>
                            <h1 className={`h1-header-borrder-2 higher ${isMobile ? 'gold' : ''}`} style={isMobile ? { fontSize: '8vw', WebkitTextStrokeColor: '#fed43a' } : {}}>
                                Hi there, I'm
                            </h1>
                            <h1 className="h1-header-filled">
                                Priyanshu Kushwaha
                            </h1>
                            <h1 className={`h1-header-borrder-2 higher ${isMobile ? 'gold' : ''}`} style={isMobile ? { fontSize: '6vw', WebkitTextStrokeColor: '#fed43a', lineHeight: '30px' } : {}}>
                                Website Developer & Blockchain enthusiast
                            </h1>
                            <p className="h1-header-description" style={isMobile ? { fontSize: '3vw' } : {}}>
                                With extensive freelancing experience, I excel in integrating aesthetic design with seamless functionality to deliver compelling websites.
                            </p>
                            <a className="btn btn-gold" href='#contact' style={isMobile ? { marginTop: '20px', width: '100%', padding: '10px' } : { marginTop: '100px' }}>
                                Reach out to Me
                            </a>
                        </div>
                <h1 className="h1-header-filled text-center scrollText">My Work</h1>
                    
                    </div>
                    <div className={`col-md-6 justify-content-center rightSection d-flex ${isMobile ? 'd-none' : ''}`}>
                        <div className='heroRightSection'>
                            <Lottie animationData={heroAnim} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
