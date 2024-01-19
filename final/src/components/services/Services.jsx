import React from "react";
import { servicesList } from '../../utils/data'
import { motion } from "framer-motion";
import css from "./Services.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Services = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <a href="" className="anchor" id="services"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>
                            Our Services
                        </span>
                    </div>
                </div>
                <div className={`flexCenter ${css.showCase}`}>

                    {/* services */}
                {
            servicesList.map((exp,i)=>{
              return (<motion.div
              variants={fadeIn("right","tween",(i+1)*0.1,0.2)}
              className={css.exp} key={i}>
                <div className="flexCenter" style={{background: exp.bg}}>
                  <exp.icon size={25} color='white'/>
                </div>
                <div className={`${css.linkss}`}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrWxB3QsXn9UZjZAtJ5sMtOU9uWzVWyMUgkrLXr6t4zGpHMQ/viewform?usp=sf_link">
                {/* style={{textDecoration:"none",color:"black"}} */}
                
                  <span>

                    {exp.name}

                  </span>
                  

                  </a>
                </div>
                
                

              </motion.div>)
            })
          }
                
                {/* <motion.img 
                variants={fadeIn("up", "tween", .5, .6)} 
                src="./showCase1.png" alt="project" />
                
                <motion.img 
                variants={fadeIn("up", "tween", .7, .6)} 
                src="./showCase2.png" alt="project" />
                
                <motion.img 
                variants={fadeIn("up", "tween", .9, .6)} 
                src="./showCase3.png" alt="project" /> */}

                </div>
            </div>
    </motion.section>
  )
}

export default Services
