import React from 'react'
import "./ContactBanner.css"
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { scrollToTop } from "../../data";

export default function ContactBanner() {
  return (
    <section className='contactBannerContainer'>
        <p className='contactBannerCall'>Solicita una llamada</p>
        <div className='titleContainer'>
            <p className='contactBannerTitle'>Contactame</p>
            <Link to="/contact" scroll="true" className='link'><BiRightArrowAlt className='contactBannerIcon' onClick={scrollToTop}/></Link>
        </div>
       
    </section>
  )
}
