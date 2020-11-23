import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
            <p>2020 George Nikoglou</p>
        </Foot>
    )
}

const Foot = styled.p`
    min-height:1vh;
    position: bottom;
    left: 0;
    bottom: 0;
    height:50px;
    width: 100%;
    color: white;
    background-color:transparent;
    text-align: center;
    padding:0rem;
    margin:0rem;
    border:none;
    z-index:8;
    p{
        font-size:0.7rem;
    }
    
    
`

export default Footer
