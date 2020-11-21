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
                        <p>The goal is to deliver high quality products with the best technologies available. Top Speed web-apps-sites-platforms.Easy maintainable. Growing effortless  </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={team} alt="clock"></img>
                            <h3>TeamWork</h3>
                        </div>
                        <p>The commitment to teamwork and communication is vital to our work ethics.</p>
                    </Card>
                    <Card >
                        <div className="icon">
                            <img src={diagram} alt="clock"></img>
                            <h3>Diagram</h3>
                        </div>
                        <p>Work with the top most wanted frameworks like ReactJs-GatsbyJs-Styled-Components-Framer Motion and other</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock"></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>High quality products doesn't have to be expensive.The goal is to manipulate the cost per case, so our clients will be free to adapt to their needs as it grows.</p>
                    </Card>
                </Cards>
            </Description> 
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom:8rem;

    }
    p{
        width:70%;
        padding: 3rem 0rem 3rem 0rem;
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
    img{
        width:40px;
    }
    h3{
        font-size:1.5rem;
        margin-left:1rem;
        
        color:#41EAD4;
        padding:1rem;
    }
    p{
        font-size:1rem;
    }
`;


export default ServicesSection
