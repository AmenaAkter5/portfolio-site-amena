import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_kh6rjft",
                "template_5cewyga",
                form.current,
                "2OPEq4U9tXBwKvNt9"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section id='contact' className='contact-section'>
            <div className='text-white text-center'>
                <h4>Reach Me</h4>
                <p>You can reach me out there...</p>
                <p>Dhaka, Bangladesh</p>
                <p>+8801718340089</p>
                <p>amenaakter1952@gmail.com</p>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input className='text-white' type="text" name="user_name" id="" placeholder='Enter your name' />
                    <input className='text-white' type="email" name="user_email" placeholder='Enter your email address' />
                    <textarea className='text-white' name="message" cols="50" rows="5" placeholder='Write your message' />
                    <input className='text-white fw-bold' type="submit" value="Send" />
                </form>
            </div>


        </section>
    );
};

export default Contact;