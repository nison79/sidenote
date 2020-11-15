import React from 'react'
import home from '../images/home.jpg'
//styled
import styled from 'styled-components';
import {About,Description,Image,Hide} from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make  </h2>
                    </div>
                    <Hide>
                        <h2>
                        your <span>dreams </span>come 
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact Us for your web development ideas.We can make it reality</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home} alt="desk"></img>
            </Image>
        </About>
    )
}

//styled Components

// const About = styled.div`
//     min-height:90vh;
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     padding: 5rem 10rem;
//     color:white;
// `;

// const Description = styled.div`
//     flex:1;
//     padding:right;
//     h2{
//         font-weight:lighter;
//     }
// `

// const Image = styled.div`
//     flex:1;
//     overflow:hidden;
//     img{
//         object-fit:cover;
// }
// `

// const Hide = styled.div`

// overflow:hidden;

// `

export default AboutSection
