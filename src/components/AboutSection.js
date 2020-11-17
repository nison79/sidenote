import React from 'react'
import home from '../images/home.jpg'
//styled
import {About,Description,Image,Hide} from '../styles'
//framer motion
import { motion } from 'framer-motion'
import titleAnim from '../titleAnim'
import fadeAnim from '../fadeAnim'
import photoAnim from '../photoAnim'
import Wave from '../components/Wave'



const AboutSection = () => {



    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}  >           
                        We work to make 
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                        your <span>dreams </span>come 
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnim}>Contact Us for your web development ideas.We can make it reality</motion.p>
                <motion.button variants={fadeAnim}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial="hidden" show="animate" src={home} alt="desk"></motion.img>
            </Image>
            <Wave />
        </About>
    )
};

export default AboutSection
