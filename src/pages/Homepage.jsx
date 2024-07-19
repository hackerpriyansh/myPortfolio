import heroAnim from '../assets/heroAnim.json'
import Lottie from 'lottie-react'

const Homepage = () => {
    return (
        <>
            <section className='hero wrapper'>
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-6 hero-left">
                            <h1 className="h1-header-borrder-2 higher gold">Hi there, I'm</h1>
                            <h1 className="h1-header-filled">Priyanshu Kushwaha</h1>
                            <h1 className="h1-header-borrder-2 higher gold">Website Developer & Blockchain enthusiast</h1>
                            <p className="h1-header-description">With extensive freelancing experience, I excel in integrating aesthetic design with seamless functionality to deliver compelling websites.</p>
                            <a className="btn btn-gold mt-5">Reach out to Me</a>
                        </div>
                        <div className="col-md-6">
                            <Lottie animationData={heroAnim}></Lottie>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage