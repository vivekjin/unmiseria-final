import React from 'react'
import css from './Hero.module.scss'
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
            <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25 }}
            className={`innerWidth ${css.container}`}>
                <a href="" className="anchor" id="home"></a>
                <div className={css.upperElements}>

            {/* upper elements */}


                    <motion.span
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">
                        Welcome to<br />
                        Unmiseria
                    </motion.span>
                    <motion.span
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className="secondaryText">
                        Take a step ahead to embrace and reclaim <br />
                        the psychological wellness.

                    </motion.span>
                </div>
                {/* center img  taking as person*/}
                
                <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./home.png" alt="" />
                </motion.div>


                <div className={css.lowerElements}>

                {/* lowerElements */}

                    <motion.div
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className={css.experience}>
                        <div className="primaryText">
                            100+
                        </div>
                        <div className="secondaryText">
                            <div>Happy</div>
                            <div>Customer</div>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>Certified professional</span>
                        <span>Psychiatrist</span>

                    </motion.div>
                </div>
            </motion.div>
    </section>
  )
}

export default Hero
