import React from 'react'
//import Icons
import service from '../images/service.png'
import clock from '../images/clock.png'
import money from '../images/money.png'
import diagram from '../images/diagram.png'
import team from '../images/team.png'
//styles
import styled from 'styled-components'
import {About,Description,Image} from '../styles'

import useScroll from './useScroll'
import scrollReveal from '../scrollReveal'




const ServicesSection = () => {
    const [element ,controls] = useScroll();
    return (
        <Services ref={element} variants={scrollReveal} animate={controls} initial="hidden" >
            <Description>
                <h2>High <span>quality </span>services</h2>
                <Cards>
                    <Card >
                        <div className="icon">
                            <img src={clock} alt="clock"></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={team} alt="clock"></img>
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card >
                        <div className="icon">
                            <img src={diagram} alt="clock"></img>
                            <h3>Diagram</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock"></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description> 
            <Image>
                <img src={service} alt="desk"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom:8rem;

    }
    p{
        width:70%;
        padding: 2rem 0rem 3rem 0rem;
    }

`;

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
    @media (max-width:1300px) {
        justify-content:center;
    }


`;

const Card = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
        width:25px;
    }
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
`;


export default ServicesSection
