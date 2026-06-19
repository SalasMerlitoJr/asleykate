import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/asley.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    {/* <p className="heading-sub-text">Who I am</p> */}
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                    <p>I’m Asley Kate Linaac Doong, a licensed physician specializing in clinical practice and the development of scalable, patient-centered healthcare systems.</p>
                    <br />
                    <p>I am a physician with extensive experience in direct patient care, epidemiology, and public health program administration. My professional focus is on delivering evidence-based medical interventions and enhancing health outcomes across diverse populations.</p>
                    <br />
                    <p>I am deeply committed to community health, with a passion for advancing initiatives that foster sustainable improvements in disease prevention, health promotion, and healthcare accessibility.</p>
                  </motion.div>
                  <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal} className='about-img'>
                    <img src={ProfileImg} alt="Profile" />
                  </motion.div>
                </div>
              </div>
          </div>
      </>
  )
};

export default About;
