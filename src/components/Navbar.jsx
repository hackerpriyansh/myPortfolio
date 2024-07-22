import { useState } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState('');

    const handleSetActive = (to) => {
        setActive(to);
    };

    const scrollToSection = (id) => {
        scroller.scrollTo(id, {
            smooth: true,
            offset: 50, // adjust scroll offset if necessary
        });
    };

    return (
        <aside>
            <div className="offcanvas-lg offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className='Navbar'>
                        <ul className='nav-UL d-flex flex-column align-items-center'>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                >
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="tools"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                >
                                    Tools
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <ul className='socials p-0 d-flex gap-4'>
                                    <li><a href="https://www.instagram.com/priyanshhu_kush/"><i className="social-icon fa-brands fa-instagram"></i></a></li>
                                    <li><a href="tel:918384811512"><i className="social-icon fa-solid fa-phone"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/priyanshu-kushwaha-1b3496138/"><i className="social-icon fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Navbar;
