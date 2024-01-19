import React from "react";
import { motion } from "framer-motion";
import css from "./Contact.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Contact = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <a href="" className="anchor" id="contact"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    
                        <span className='primaryText'>
                            Contact Us
                        </span>
                    
                </div>
                <div className={`flexCenter ${css.showCase}`}>
                <motion.div
                variants={fadeIn("up", "tween", .3, .1)} 
                className={`secondaryText ${css.contactText}`}>
                    <div>
                    Want to know more ? 
                    </div>
                    <div>
                    Explore more and feed your curiosity.
                    </div>
                    <div>
                    Get in touch.
                    </div>
                    <div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrWxB3QsXn9UZjZAtJ5sMtOU9uWzVWyMUgkrLXr6t4zGpHMQ/viewform?usp=sf_link" className={`flexCenter ${css.buttonContact}`}>Contact Us</a>
                    </div>
                    </motion.div>
                
                <motion.img 
                variants={fadeIn("up", "tween", .5, .4)} 
                src="./contact.jpeg" alt="project" />

                </div>
            </div>
    </motion.section>
  )
}

export default Contact
