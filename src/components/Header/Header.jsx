import React, { useState } from "react";
import "./Header.css";
import { AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link, useLocation  } from "react-router-dom";
import { scrollToTop } from "../../data";


function Header() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const location = useLocation();


    const handleToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
        setShowCloseButton(!toggleNavbar);
    };

    const handleCloseNavbar = () => {
        setToggleNavbar(false);
        setShowCloseButton(false);
    };

    const isActivePage = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <header className={`header`}>
                <nav className="navbar">
                    <ul className="navbarUl">
                        <li onClick={scrollToTop} className="navbarUlLi">
                            <Link 
                                to="/" 
                                className={`navbarUlLi ${isActivePage('/') ? 'active' : ''}`}>HOME
                            </Link>
                        </li>

                        <li onClick={scrollToTop} className="navbarUlLi">
                            <Link 
                                to="/projects" 
                                className={`navbarUlLi ${isActivePage('/projects') ? 'active' : ''}`}>PROYECTOS
                            </Link>
                        </li>
                        <li onClick={scrollToTop} className="navbarUlLi">
                            <Link 
                                to="/" 
                                className={`navbarUlLi ${isActivePage('/aboutme') ? 'active' : ''}`}>SOBRE MI
                            </Link>
                        </li>
                        <li onClick={scrollToTop} className="navbarUlLi">
                            <Link  
                                to="/contact" 
                                className={`navbarUlLi ${isActivePage('/contact') ? 'active' : ''}`}>CONTACTO
                            </Link>
                        </li>
                    </ul>
                </nav>
                    {!toggleNavbar && (
                        <HiBars3
                            className="toggleNavbarButton"
                            onClick={handleToggleNavbar}
                        />
                    )}


                {toggleNavbar && (
                    <motion.nav
                        initial={{ x: "100%", opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        exit={{ y: "100%", opacity: 0 }} 
                        transition={{ duration: 0.5 }}
                        className="toggleNavbar"
                        onClick={handleCloseNavbar}
                    >
                        <AiOutlineClose
                            className="closeNavbarButton"
                            onClick={handleCloseNavbar}
                        />
                        <ul className="toggleNavbarUl">
                            <li className="toggleNavbarUlLi"><Link to="/"  className="toggleNavbarUlLi">HOME</Link></li>
                            <li className="toggleNavbarUlLi"><Link to="/projects" className="toggleNavbarUlLi">PROYECTOS</Link></li>
                            <li className="toggleNavbarUlLi"><Link to="/" className="toggleNavbarUlLi">SOBRE MI</Link></li>
                            <li className="toggleNavbarUlLi"><Link to="/contact" className="toggleNavbarUlLi" >CONTACTO</Link></li>
                        </ul>
                        <div className="toggleNavbarIcons">
                            <Link to="https://www.instagram.com/_denxc/" target="_blank"><AiOutlineInstagram className="navbarIcons"/></Link>
                            <Link to="https://github.com/Denen9" target="_blank"><AiFillGithub className="navbarIcons"/></Link>
                            <Link to="https://www.linkedin.com/in/enzo-diaz-055719270/"target="_blank"><AiOutlineLinkedin className="navbarIcons"/></Link>
                            <Link to="https://wa.link/nuu6l6" target="_blank"><AiOutlineWhatsApp className="navbarIcons"/></Link>
                        </div>
                    </motion.nav>
                )}
            </header>
        </div>
    );
}

export default Header;
