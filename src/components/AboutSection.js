import React from 'react'
//styled
import {About,Description,Image,Hide} from '../styles'
import styled from 'styled-components'
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
                        I work to make 
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                        your <span>ideas </span>come to 
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <AboutStyled>
                            <motion.h2 variants={titleAnim}>life.</motion.h2>
                        </AboutStyled>
                    </Hide>
                </motion.div>
                    <AboutStyled>
                        <motion.h3 variants={fadeAnim}>Contact me for your web development ideas.</motion.h3>
                    </AboutStyled>
                <motion.button variants={fadeAnim}>Contact</motion.button>
            </Description>
            <Wave />
        </About>
    )
};

const AboutStyled = styled(motion.div)`
    h3{
        padding:2rem 0rem;
    }

`

export default AboutSection
