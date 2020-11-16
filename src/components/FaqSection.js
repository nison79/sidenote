import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'


const FaqSection = () => {
    return (
        <div>
            <Faq>
                <h2>Any Questions <span>FAQ</span></h2>
                <div className="questions">
                    <h4>How Do I Start?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>

                    </div>
                    <div className="faq-line"></div>
                </div>

                <div className="questions">
                    <h4>Daily Schechule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                        
                    </div>
                    <div className="faq-line"></div>
                </div>

                <div className="questions">
                    <h4>Different Pay Methods</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                        
                    </div>
                    <div className="faq-line"></div>
                </div>

                <div className="questions">
                    <h4>What products Do You Offer?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                        
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Faq>
        </div>
    )
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
        
    }
    .faq-line{
        background:#cccccc;
        margin: 2rem 0rem;
        width:100%;
        height:0.2rem;
    }

    .questions{
        padding: 3rem 0rem;
        cursor:pointer;
    }

    .answer{
        padding:2rem 0 rem;
    } p{
        padding:1rem 0rem;
    }


` 

export default FaqSection
