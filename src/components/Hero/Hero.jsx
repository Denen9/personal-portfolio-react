import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";
import { scrollDown } from "../../data";

function Hero() {

  return (
    <section className="heroBox">
      <motion.div
        className="titleBox"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="titleOne">¡Hola! Soy <span className="titleOneDenen">DENEN,</span></span>
        <span className="titleTwo"> FRONT END DEVELOPER</span>
      </motion.div>
      <div className="heroIcon" onClick={scrollDown}>
        <BsChevronCompactDown className="heroIcon" />
      </div>
    </section>
  );
}
export default Hero;
