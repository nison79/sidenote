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


const OurWork = () => {
    return (
        <StyledWork 
        variants={PageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit" 
        style={{background: "#fff"}}
        >
            <StyledImage>
                <h2>The Girl</h2>
                <div className="line"></div>
                <Link to="/work/girl">
                    <img src= {el1} alt="girl"></img>
                </Link>
            </StyledImage>

            <StyledImage>
                <h2>The Mother</h2>
                <div className="line"></div>
                <Link to="work/mother">
                    <img src= {mother} alt="girl"></img>
                </Link>
            </StyledImage>

            <StyledImage>
                <h2>The Dog</h2>
                <div className="line"></div>
                <Link to="/work/dog">
                    <img src= {dog} alt="girl"></img>
                </Link>
            </StyledImage>
        </StyledWork>
    )
};

const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    h2{
        padding:1rem 0rem;
    }

`
const StyledImage = styled.div`
    padding-bottom:10rem;
    .line{
        height:0.5rem;
        background: #cccccc;
        margin-bottom:3rem;
    }

    img {
        width:100%;
        height:70vh;
        object-fit:cover;

    }


`
export default OurWork
