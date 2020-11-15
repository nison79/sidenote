import React from 'react'
import home from '../images/home.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make  </h2>
                    </div>
                    <div className="hide">
                        <h2>
                        your <span>dreams</span>come 
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact Us for your web development ideas.We can make it reality</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home} alt="desk"></img>
            </div>
        </div>
    )
}

export default AboutSection
