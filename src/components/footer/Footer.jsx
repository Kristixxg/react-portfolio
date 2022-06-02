import React from "react";
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="footer__logo">Kristy Guo</a> */}

            <div className="footer__socials">
                <button className="btn btn-primary footer-btn">
                    <a href="https://www.linkedin.com/in/kristixxg/" target="#"><BsLinkedin /></a>
                    <h4>LinkedIn</h4>
                </button>
                
                <button className="btn btn-primary footer-btn">
                    <a href="https://github.com/Kristixxg" target="#"><BsGithub /></a>
                    <h4>GitHub</h4>
                </button>
               
            </div>

            <div className="footer_copyright">
                <small>&copy; Kristy Guo All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;