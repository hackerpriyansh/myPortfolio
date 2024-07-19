import heroAnim from '../assets/heroAnim.json'
import Lottie from 'lottie-react'

const Homepage = ({ isMobile }) => {
    return (
        <>
            <div className={`toggle-btn ${isMobile ? '' : 'd-none'}`} style={isMobile ? { position:'absolute', top:'20px', right:'10px' } : {}}>
                <button className="btn fa-solid fa-bars" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                </button>
            </div>
        
            <section className='heroSection'>
                <div className="container-fluid h-100">
                    <div className="row  h-100">
                        <div className={`col-md-6 leftSection ${isMobile ? 'p-3' : ''}`}>
                            <h1 className={`h1-header-borrder-2 higher ${isMobile ? 'gold' : ''}`} style={isMobile ? { fontSize: '8vw', WebkitTextStrokeColor: 'gold' } : {}}>
                                Hi there, I'm
                            </h1>
                            <h1 className="h1-header-filled">
                                Priyanshu Kushwaha
                            </h1>
                            <h1 className={`h1-header-borrder-2 higher ${isMobile ? 'gold' : ''}`} style={isMobile ? { fontSize: '6vw', WebkitTextStrokeColor: 'gold', lineHeight: '30px' } : {}}>
                                Website Developer & Blockchain enthusiast
                            </h1>
                            <p className="h1-header-description" style={isMobile ? { fontSize: '3vw' } : {}}>
                                With extensive freelancing experience, I excel in integrating aesthetic design with seamless functionality to deliver compelling websites.
                            </p>
                            <a className="btn btn-gold" style={isMobile ? { marginTop: '20px', width: '100%', padding: '10px' } : {marginTop:'100px'}}>
                                Reach out to Me
                            </a>
                        </div>

                        {/* Right column with animation */}
                        <div className="col-md-6 d-flex">
                            <Lottie animationData={heroAnim} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Homepage;
