import React from 'react'
//animations
import  { motion } from 'framer-motion'
import  PageAnimation  from '../animation'
import titleAnim  from '../titleAnim'
import styled from 'styled-components'
//social icons
import tweet from '../images/tweet.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
    <ContactStyle
        variants = {PageAnimation} 
        initial="hidden" animate="show" 
        exit="exit"
        style={{background: "#fff"}}
        >
            <Title>
                <Hide>
                    <motion.h1 variants={titleAnim}>
                        Get In Touch.
                    </motion.h1>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants= {titleAnim}>
                        <Circle />
                        <h2>Give Us A Call to :  <span>+30 6945419898</span></h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants= {titleAnim}>
                        <Circle />
                        <h2>Send An Email to : <span>georgenison@gmail.com</span></h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants= {titleAnim}>
                        <Circle />
                        <h2>Social:</h2>
                        <div className="social-icons">
                            <a href= "https://github.com/nison79"><img src= {github} alt="github" /></a>
                            <a href= "https://www.linkedin.com/in/george-nikoglou-54b24532/"><img src= {linkedin} alt="github" /></a>
                            <a href= "https://twitter.com/gnikoglou79"><img src= {tweet} alt="github" /></a>
                        </div>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding:11rem 2rem;
    color:#353535;
    min-height:90vh;
 
    `


const Title = styled.div`
    margin-bottom: 7rem;
    color:black;

`

const Hide =  styled.div`
    overflow:hidden;
`

const Circle = styled.div`
    border-radius:50%;
    width:1rem;
    height:1rem;
    background:#353535;
    padding:1rem;
    margin:2rem;
    @media (max-width:768px){
            width:0.8rem;
            height:0.5rem;
        }
`

const Social = styled(motion.div)`
    display:flex;
    align-items:center;
    h2{
        
        display: inline-block;
        margin:1rem;
        margin-left:3rem;
        @media (max-width:768px){
            font-size:1.7rem;
        }
    }
    
    a{
        margin-left:3rem;
    }
    .social-icons{
        display:flex;
        justify-content:space-between;
        img{
        width:50px;
        @media (max-width:768px){
            width:30px;
        }
    }

    }
`


export default ContactUs
