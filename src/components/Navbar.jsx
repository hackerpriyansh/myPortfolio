import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <aside>
                <nav className='Navbar'>
                    <ul className='Navbar p-0 d-flex flex-column justify-content-around align-items-center'>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/work">Work</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/resume">CV</NavLink></li>
                        <li>
                            <ul className='socials p-0 d-flex flex-column gap-4'>
                                <li><NavLink to="#insta"><i className="social-icon fa-brands fa-instagram"></i></NavLink></li>
                                <li><NavLink to="#insta"><i className="social-icon fa-solid fa-phone"></i></NavLink></li>
                                <li><NavLink to="#insta"><i className="social-icon fa-brands fa-linkedin-in"></i></NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Navbar