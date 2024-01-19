import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from "../../utils/motion"

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id='about'></a>
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.15 }}
       className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>
        
        {/* left side */}

        <div className={css.leftSide}>
          {
            projectExperience.map((exp,i)=>{
              return (<motion.div
              variants={fadeIn("right","tween",(i+1)*0.2,1)}
              className={css.exp} key={i}>
                <div className="flexCenter" style={{background: exp.bg}}>
                  <exp.icon size={25} color='white'/>
                </div>

                <div>
                  <span>
                    {exp.name}
                  </span>

                  <span>
                    {exp.projects}
                  </span>
                </div>

              </motion.div>)
            })
          }
        </div>


        {/* right side */}

        <motion.div
        variants={textVariant(0.1)}
        className={css.rightSide}>
            <span className="primaryText">
              Why Us?
              </span>
              {
                WhatDoIHelp.map((paragraph,i)=>{
                  return <span className='secondaryText' key={i}>
                    {paragraph}
                  </span>
                })
              }

              <div className={`flexCenter ${css.stats}`}>
                <div className={`flexCenter ${css.stat}`}>
                  <span className='primaryText'>
                  Working Experience
                  </span>
                  <span className='secondaryText'>
                  Unmiseria has a team of highly experienced mental health professionals with diverse backgrounds and expertise.
                  </span>
                </div>
                <div className={`flexCenter ${css.stat}`}>
                <span className='primaryText'>
                    100+
                  </span>
                  <span className='secondaryText'>
                    Happy Customer and increasing
                  </span>
                </div>
              </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experties
