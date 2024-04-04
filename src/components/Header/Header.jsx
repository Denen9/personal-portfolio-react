import React, { useState, useEffect } from "react";
import "./Header.css";
import { AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Header() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    const handleToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
        setShowCloseButton(!toggleNavbar);
    };

    const handleCloseNavbar = () => {
        setToggleNavbar(false);
        setShowCloseButton(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

      useEffect(() => {
        const handleScroll = () => {
          {window.scrollY > 40 ? setScrolled(true) : setScrolled(false)}
        };
            window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <nav className="navbar">
                    <ul className="navbar__ul">
                        <Link to="/"  onClick={scrollToTop} className="link"><li className="navbar__ul-li">HOME</li></Link>
                        <Link to="/projects"  onClick={scrollToTop} className="link"><li className="navbar__ul-li">PROYECTOS</li></Link>
                        <li className="navbar__ul-li">SOBRE MI</li>
                        <li className="navbar__ul-li">CONTACTO</li>
                    </ul>
                </nav>
                    {!toggleNavbar && (
                        <HiBars3
                            className="toggleNavbar__button"
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
                            className="closeNavbar__button"
                            onClick={handleCloseNavbar}
                        />
                        <ul className="toggleNavbar__ul">
                            <Link to="/" className="toggleNavbar__ul-li">HOME</Link>
                            <Link to="/projects" className="toggleNavbar__ul-li">PROYECTOS</Link>
                            <li className="toggleNavbar__ul-li">SOBRE MI</li>
                            <li className="toggleNavbar__ul-li">CONTACTO</li>
                        </ul>
                        <div className="toggleNavbar__icons">
                            <AiOutlineInstagram className="navbarIcons"/>
                            <AiFillGithub className="navbarIcons"/>
                           <AiOutlineLinkedin className="navbarIcons"/>
                        </div>
                    </motion.nav>
                )}
            </header>
        </div>
    );
}

export default Header;
