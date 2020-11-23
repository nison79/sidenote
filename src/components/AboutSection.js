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
                        <Intro>
                            <motion.h1 variants={titleAnim}>Hello,<span>  I'm George.</span></motion.h1>
                        </Intro>
                        <motion.h1 variants={titleAnim}  >           
                        A ReactJS Developer 
                        </motion.h1>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                        Your <span>apps </span>are coming to
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <AboutStyled>
                            <motion.h2 variants={titleAnim}>life.</motion.h2>
                        </AboutStyled>
                    </Hide>
                </motion.div>
                    <Button>
                        <motion.button variants={fadeAnim}>Contact</motion.button>
                    </Button>
            </Description>
            <Wave />
        </About>
    )
};

const Intro = styled(motion.div)`

    margin:15rem 0rem;
`

const Button = styled(motion.div)`
    margin:8rem 0rem;
`


const AboutStyled = styled(motion.div)`
    h3{
        padding:2rem 0rem;
    }

`

export default AboutSection
