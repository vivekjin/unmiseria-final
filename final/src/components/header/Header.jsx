import React, { useEffect, useRef, useState } from 'react'
import css from './Header.module.scss';
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const menuRef = useRef(null);
    const [menuOpened,setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()

    useOutsideAlerter({
        menuRef,
        setMenuOpened,
    });

  return (
    <motion.div
    variants={headerVariants}
    initial = "hidden"
    whileInView="show"
    className={`bg-primary paddings ${css.wrapper}`}
    viewport = {{once:true,amount:0.25}}
    style={{boxShadow:headerShadow}}
    >
        <div className={`innerWidth ${css.container} flexCenter`}>
            <div className={css.name}>
                <img src="./logo.png" alt="" />
                Unmiseria              
            </div>
            <ul 
             className={`flexCenter ${css.menu}`}
             ref={menuRef}
            style={getMenuStyles(menuOpened)}
           >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+91 8539874303</p>
                        <BiPhoneCall size = {"40px"}/>
                    </li>
                </ul>

                 {/* for medium and small screens */}
                <div 
                className={css.menuIcon}
                onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30}/>
                </div>
        </div>
    </motion.div>
  )
}

export default Header
