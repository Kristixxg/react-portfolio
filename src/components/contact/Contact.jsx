import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_65y747q', 'template_dzn90ua', form.current, 'dx_UMkOWyHBANF96A')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contanct__option-icon"/>
                        <h4>Email</h4>
                        {/* <h5>krisxxg@gmail.com</h5> */}
                        <a href="mailto:krisxxg@gmail.com" target='#'>Send an Email</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;