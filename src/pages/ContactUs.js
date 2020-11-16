import React from 'react'
//animations
import  { motion } from 'framer-motion'
import  PageAnimation  from '../animation'

const ContactUs = () => {
    return (
        <motion.div 
        variants = {PageAnimation} 
        initial="hidden" animate="show" 
        exit="exit"
        style={{background: "#fff"}}
        >
            <h1>Contact</h1>
        </motion.div>
    )
}

export default ContactUs
