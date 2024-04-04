import React from 'react'
import "./ContactBanner.css"
import { BiRightArrowAlt } from "react-icons/bi";

export default function ContactBanner() {
  return (
    <section className='contactBannerContainer'>
        <p className='contactBannerCall'>Solicita una llamada</p>
        <div className='titleContainer'>
            <p className='contactBannerTitle'>Contactame</p>
            <BiRightArrowAlt className='contactBannerIcon'/>
        </div>
       
    </section>
  )
}
