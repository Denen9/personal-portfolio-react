import React from "react";
import "./Footer.css"
import { AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import { Link } from "react-router-dom";


const Footer = ()=>{
    return (
        <footer className="footerContainer" id="contact">
            <section className="footer">
                <span className="footerTitle">En <span>un Toque</span></span>
                <span className="footerSubtitle">Contactame para saber mas...</span>
                <div className="footerContacts">
                    <Link to="https://github.com/Denen9" target="_blank"><AiFillGithub className="footerIcons"/></Link>               
                    <Link to="https://www.instagram.com/_denxc/" target="_blank"><AiOutlineInstagram className="footerIcons"/></Link>
                    <Link to="https://www.linkedin.com/in/enzo-diaz-055719270/" target="_blank"><BiLogoLinkedin className="footerIcons"/></Link> 
                    <Link to="https://wa.link/nuu6l6" target="_blank"><AiOutlineWhatsApp className="footerIcons"/></Link>                                       
                </div>
                <p className="footerCopyright">Hecho por <span>Denen</span>  - &copy; Todos los derechos reservados.</p>
            </section>
        </footer>
    )
}

export default Footer;