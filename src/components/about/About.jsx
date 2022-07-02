import React from "react";
import './about.css';
import ME from '../../assets/profileFull-removebg.png'
import {RiPencilRuler2Line} from 'react-icons/ri';
import {MdConstruction} from 'react-icons/md';
import {IoIosTennisball} from 'react-icons/io';
import {BiMoviePlay} from 'react-icons/bi';
import {FaCoffee} from 'react-icons/fa'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">

            <div className="about__cards">
                    <p>
                    Hi, I'm Kristy Guo. I graduated from UC Davis with a B.S. degree in Landscape Architecture. I had 5+ years of experience in the construction management field as a senior project engineer. With a great passion for web development I decided to make a career change and had recently completed a full-stack coding bootcamp by UC Berkeley. I am actively seeking for opportunities in software development and my goal as a software engineer is to build impactful products and learn new technologies.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
                <div className="about__me">

                    {/* <div className="box">
                            <div className="about__me-image">
                                <img className="img_kg" src={ME} alt="About-img" />
                            </div>
                    </div> */}

                    <ul className="lego_ul">
                        <li style={{"--clr":"#1877f2", "--i":6}} className="lego_li"><span><RiPencilRuler2Line /></span>Architecture / Landscape Architeture / Design</li>
                        <li style={{"--clr":"#25d366", "--i":5}} className="lego_li"><span><MdConstruction /></span>Construction / Commercial / Infrastructure</li>
                        <li style={{"--clr":"#1da1f2", "--i":4}} className="lego_li"><span><IoIosTennisball /></span>Tennis / Running / Gym / Rumble Boxing</li>
                        <li style={{"--clr":"#c32aa3", "--i":3}} className="lego_li"><span><BiMoviePlay /></span>Ozark / Fight Club / Said The Sky</li>
                        <li style={{"--clr":"#ff0000", "--i":2}} className="lego_li"><span><FaCoffee /></span>Pour Over / Bubble Tea / Raspberries</li>
                        {/* #0affc2 */}
                    </ul>







                    
                </div>

             
                
            </div>
        </section>
    )
}

export default About;