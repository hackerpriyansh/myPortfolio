import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <>
            <aside>
                <div className="offcanvas-lg offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasResponsive"
                    aria-labelledby="offcanvasResponsiveLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav className='Navbar'>
                            <ul className='nav-UL d-flex flex-column align-items-center'>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="work">Work</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                <li><Link to="resume">CV</Link></li>
                                <li>
                                    <ul className='socials p-0 d-flex  gap-4'>
                                        <li><Link to="#insta"><i className="social-icon fa-brands fa-instagram"></i></Link></li>
                                        <li><Link to="#insta"><i className="social-icon fa-solid fa-phone"></i></Link></li>
                                        <li><Link to="#insta"><i className="social-icon fa-brands fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
            </aside>
        </>
    )
}

export default Navbar