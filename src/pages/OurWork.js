import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//images
import el1 from '../images/el1.png'
import mother from '../images/mother.png'
import dog from '../images/dog.png'
//animations
import  { motion } from 'framer-motion'
import  PageAnimation  from '../animation'
import photoAnim from '../photoAnim'
import fadeAnim from '../fadeAnim'
import lineAnim from '../lineAnim'
import sliderAnim from '../sliderAnim'
import sliderContainer from '../sliderContainer'
import  useScroll  from '../components/useScroll'
import  useScroll2  from '../components/useScroll2'

import ScrollTop from '../components/ScrollTop'


const OurWork = () => {
    const [element,controls] = useScroll();
    const [element2,controls2] = useScroll2();
    
    return (
        <StyledWork 
        variants={PageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit" 
        style={{background: "#fff"}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnim}></Frame1>
                <Frame2 variants={sliderAnim}></Frame2>
                <Frame3 variants={sliderAnim}></Frame3>
                <Frame4 variants={sliderAnim}></Frame4>
            </motion.div>
            <StyledImage >
                <motion.h2 variants={fadeAnim}>Music Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/girl">
                    <motion.img variants={photoAnim} src= {el1} alt="girl"></motion.img>
                </Link>
            </StyledImage>

            <StyledImage ref={element} variants={fadeAnim} animate={controls} initial="hidden">
                <h2>Ignite Games </h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="work/mother">
                    <Hide>
                        <img src= {mother} alt="girl"></img>
                    </Hide>
                </Link>
            </StyledImage>

            <StyledImage ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
                <h2>YouTube Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/dog">
                    <img src= {dog} alt="girl"></img>
                </Link>
            </StyledImage>
            <ScrollTop />
        </StyledWork>
    )
};

const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    h2{
        padding:1rem 0rem;
        @media (max-width:768px){
        font-size:2rem;
    }
    }
    

`
const StyledImage = styled(motion.div)`
    padding-bottom:10rem;
    .line{
        height:0.5rem;
        background: #cccccc;
        margin-bottom:3rem;
        background:#23d997;
    }

    img {
        width:50%;
        height:70vh;
        object-fit:cover;
        @media (max-width:1100px){
            width:100%;
        }
        @media (max-width:768px){
            width:100%;
            height:50%;
        }
    }
`
const Hide = styled.div`
    overflow:hidden;

`

//frame Animation
const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background:#fffebf;
    z-index:3;
`
const Frame2 = styled(Frame1)`
    background:#ff8efb;

`

const Frame3 = styled(Frame1)`
    background:#8ed2ff;

`

const Frame4 = styled(Frame1)`
    background:#8effa0;
`

export default OurWork
