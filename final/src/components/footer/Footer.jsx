import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Take a step ahead to embrace and <br />
          reclaim the psychological wellness.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:connectunmiseria@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Mail us at</span>
            <p>connectunmiseria@gmail.com</p>

            <div className={css.socialImg}>
            <a href="https://www.linkedin.com/company/unmiseriaofficial/">
              <img src="./linkedin.svg" style={{height:"20px", margin:"10px"}} alt={"img here"}/>
            </a>
            <a href="https://www.instagram.com/official_unmiseria/">
              <img src="./instagram.svg" style={{height:"20px", margin:"10px"}} alt={"img here"}/>
            </a>
            <a href="https://www.youtube.com/@unmiseria">
              <img src="./youtube.svg" style={{height:"20px", margin:"10px"}} alt={"img here"}/>
            </a>
            <a href="https://www.facebook.com/unmiseriamentalhealth">
              <img src="./facebook.svg" style={{height:"20px", margin:"10px"}} alt={"img here"}/>
            </a>
            </div>
            
        <br />
        
          </div>
          <ul className={css.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;