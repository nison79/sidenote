import React  from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'

import useScroll from './useScroll'
import scrollReveal from '../scrollReveal'


const FaqSection = ( { children }) => {

    const [element,controls] = useScroll();
    return (
        <div>
            <Faq variants = {scrollReveal} ref={element}  animate={controls} initial= "hidden">
                <h2>Any Questions <span>FAQ</span></h2>
                <AnimateSharedLayout>
                    <Toggle title = "How Do I Start ?">
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>       
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>    
                            </div>  
                    </Toggle>
                    
                    <Toggle title="Daily Schechule">
                            
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                            </div>
                        
                    </Toggle>

                    <Toggle title="Different Pay Methods">
                        
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                            </div>
                    
                    </Toggle>

                    <Toggle title="What products Do You Offer?">
                        
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorum tempore nam.</p>
                            </div>

                    </Toggle>
                </AnimateSharedLayout>
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
