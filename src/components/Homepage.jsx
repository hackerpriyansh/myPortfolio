import React from 'react'
import heroAnim from '../assets/heroAnim.json'
import Lottie from 'lottie-react'

export const Homepage = ({ isMobile }) => {
    return (
        
        <section className='heroSection'>
             <div className={`toggle-btn ${isMobile ? '' : 'd-none'}`} style={isMobile ? { position:'absolute', top:'20px', right:'10px' } : {}}>
                <button className="btn fa-solid fa-bars" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                </button>
            </div>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className={`col-md-6 leftSection ${isMobile ? 'p-3' : ''}`}>
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
                            <a className="btn btn-gold" style={isMobile ? { marginTop: '20px', width: '100%', padding: '10px' } : { marginTop: '100px' }}>
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
