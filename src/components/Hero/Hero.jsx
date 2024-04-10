import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";
import { scrollDown } from "../../data";

function Hero() {

  return (
    <section className="heroBox">
      <div className="titleBox">
        <span className="titleOne">¡Hola! Soy <span className="titleOneDenen">DENEN,</span></span>
        <span className="titleTwo"> FRONT END DEVELOPER</span>
      </div>
      <div className="heroIcon" onClick={scrollDown}>
        <BsChevronCompactDown className="heroIcon" />
      </div>
    </section>
  );
}
export default Hero;
