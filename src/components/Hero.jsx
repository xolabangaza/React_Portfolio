import React, { Component } from "react";
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import './Hero.css';

class Hero extends Component {
  render(){
   return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Xola Bangaza</h1>
      <p>
        I'm a Software Developer based in Cape Town, passionate about crafting visually 
        stunning user <strong>interfaces and building</strong> scalable,
         <strong>high-performance applications with a focus on</strong> efficiency and creativity.
      </p>
      {/* Include SocialIcons here */}
      <SocialIcons />
    </motion.div>
  );
 }
}

export default Hero;
