import React from "react";
import "./Hero.css"
import { motion } from "framer-motion";
import Button from "../Button/Button";


function Hero() {

    return (
        
        <section className="heroBox">
            <motion.div
                className="titleBox"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="titleOne">Hola! Soy</span>
                <b className="titleTwo">DENEN, FRONT END DEVELOPER</b>
            </motion.div>
            <Button>EMPEZAR</Button>
        </section>
    );
}
export default Hero;