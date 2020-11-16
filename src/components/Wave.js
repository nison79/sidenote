import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wave = () => {
    return (
        <WaveSvg>
            <svg width="2838" height="757" viewBox="0 0 2838 757" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                initial={{pathLength:0 , pathOffset:1 }}
                animate ={{pathLength:1 , pathOffset:0 }}
                transition={{duration:3}}
                d="M6 754C6 754 174 394.001 550 306.001C926 218.001 1042 606 1306 638C1570 670 2038 286 2554 62.0005C3070 -161.999 2706 366.001 2706 366.001" 
                stroke="#6157D2" 
                stroke-opacity ="0.5" 
                stroke-width="50">
                </motion.path>
            </svg>


            
        </WaveSvg>
    )
}

const WaveSvg = styled.div`
    position:absolute;
    left:0;
    z-index:-2;

`

export default Wave
