import { NavLink } from 'react-router-dom'

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
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/work">Work</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/resume">CV</NavLink></li>
                                <li>
                                    <ul className='socials p-0 d-flex  gap-4'>
                                        <li><NavLink to="#insta"><i className="social-icon fa-brands fa-instagram"></i></NavLink></li>
                                        <li><NavLink to="#insta"><i className="social-icon fa-solid fa-phone"></i></NavLink></li>
                                        <li><NavLink to="#insta"><i className="social-icon fa-brands fa-linkedin-in"></i></NavLink></li>
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