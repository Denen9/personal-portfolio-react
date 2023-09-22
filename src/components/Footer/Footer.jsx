import React from "react";
import "./Footer.css"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"


const Footer = ()=>{
    return (
        <footer className="footerContainer" id="contact">
            <section className="footer">
                <span className="footerTitle">En <span>un Toque</span></span>
                <span className="footerSubtitle">Contactame para saber mas...</span>
                <div className="footerContacts">
                    <AiFillGithub className="footerIcons"/>               
                    <AiOutlineInstagram className="footerIcons"/>
                    <BiLogoLinkedin className="footerIcons"/>                                        
                </div>
                <p className="footerCopyright">Hecho por <span>Denen</span>  - &copy; Todos los derechos reservados.</p>
            </section>
        </footer>
    )
}

export default Footer;