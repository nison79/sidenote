import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//images
import m2 from '../images/m2.png'
import m1 from '../images/m1.png'
import i1 from '../images/i1.png'
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
        style={{background: "#3F4045"}}
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
                    <motion.img variants={photoAnim} src= {m2} alt="girl"></motion.img>
                    <motion.img variants={photoAnim} src= {m1} alt="girl"></motion.img>
                </Link>
                <div className="text">
                    <span>We accessed  ChillHop Api to explore new music coming straight from 
                    a custom master Object created for our needs. The UI is clean and the priority of this project is the functional side of the app 
                    . Custom Inputs for a better experience through the app, instant visual integrity with both the Library Components and the Cover of the currently playing song.We love 
                    music, especially high-quality beats&vibes that smooth your soul.
                    </span>
                </div>
            </StyledImage>

            <StyledImage ref={element} variants={fadeAnim} animate={controls} initial="hidden">
                <h2>Ignite Games </h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="work/mother">
                    <Hide>
                        <img src= {i1} alt="girl"></img>
                    </Hide>
                </Link>
                <div className="text">
                    <span>Everyone one's in a lifetime get stuck playing a video game. Is it Tetris? Marioland? Grand Theft Auto?...Whatever you are in to 
                    Ignite is a place to search your favorite games and learn more about them. Get access to every piece of videogame's history platform compatibility.
                    Learn all the popular games, find the upcoming ones or search for a specific one. It's up to you.
                    In the technical aspect of the app we made an bridge with GameRaw Api 

                    </span>
                </div>
            </StyledImage>

            <StyledImage ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
                <h2>YouTube Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/dog">
                    <img src= {m1} alt="girl"></img>
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
    background:#3F4045;
    h2{
        padding:1rem 0rem;
        color:white;
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
        background:#D21596;
    }

    img {
        width:50%;
        height:40vh;
        object-fit:contain;
        @media (max-width:1100px){
            width:100%;
        }
        @media (max-width:768px){
            width:100%;
            height:50%;
        }
    }
    span{
        font-size:1.5rem;
        margin-top:5rem;
    }
    .text {
        margin-top:5rem;
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
