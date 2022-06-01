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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit fuga officia saepe nam explicabo, temporibus sunt suscipit vel distinctio impedit quidem laboriosam molestiae obcaecati nihil consequatur ab deserunt velit.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
            </div>
        </section>
    )
}

export default About;