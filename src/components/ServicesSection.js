import React from 'react'
//import Icons
import home from '../images/home.jpg'
import clock from '../images/clock.png'
import money from '../images/money.png'
import diagram from '../images/diagram.png'
import team from '../images/team.png'

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span>services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={team} alt="clock"></img>
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diagram} alt="clock"></img>
                            <h3>Diagram</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clock"></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div> 
            <div className="image">
                <img src={home} alt="desk"/>
            </div>
        </div>
    )
}

export default ServicesSection
