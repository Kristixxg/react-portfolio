import React from "react";
import './about.css';
import ME from '../../assets/profileFull-removebg.png'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About-img" />
                    </div>
                </div>
                <div className="about__cards">
                    <p>
                    My name is Kristy Guo. I am currently a full-time student enrolled in a coding bootcamp offered by UC Berkeley. I am always interested in a challenge and am looking for a position as a software developer. Feel free to reach out so we can chat more!
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
            </div>
        </section>
    )
}

export default About;