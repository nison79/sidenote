import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h3><Link to="/" id="logo" >George Nikoglou</Link></h3>
            <ul>
                <li>
                    <Link to="/" >About</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width:"0%"}} 
                        animate = {{width: pathname === "/" ? "100%" : "0%" }}
                        />
                </li>

                <li>
                    <Link to="/work" >Works</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width:"0%"}} 
                        animate = {{width: pathname === "/work" ? "100%" : "0%" }}
                        />
                </li>

                <li>
                    <Link to="/contact" >Contact</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width:"0%"}} 
                        animate = {{width: pathname === "/contact" ? "100%" : "0%" }}
                        />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`

    min-height:1vh;
    display:flex;
    margin: auto;
    justify-content:space-between;
    align-items:center;
    padding: 0.5rem 1rem;
    background-color:#282828;
    position:sticky;
    top:0;
    z-index:10;
    a{
        color:white;
        text-decoration:none;
        font-size:0.9rem;
    }
    ul{
        display:flex;
        list-style:none;
    }

    #logo{
        font-size:1.1rem;
        font-family: 'Poppins' ,san-serif;
        font-weight:bolder;
        color:  rgb(210, 20, 150);
        
    }
    li{
        padding-left:10rem;
        position:relative;
        
    }
    @media (max-width:978px){
        flex-direction:column;
        padding: 2rem 1rem;
        #logo {
            display:inline-block;
            margin:2rem;
        }
        ul {
            padding: 1rem;
            justify-content:space-around;
            width:100%;
        }
        li{
            padding:0;
        }
    }


`;

const Line = styled(motion.div)`
    height:0.3rem;
    background:#A4036F;
    width:0%;
    position:absolute;
    bottom:-50%;
    left:60%;
    border-radius:50px;
    @media (max-width:978px){
        left:0%
    }

`

export default Nav
