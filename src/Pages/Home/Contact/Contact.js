import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8hsnqq8",
                "template_8rpi7po",
                form.current,
                "D7kzrSlFH-9FNP42C"
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
    };

    return (
        <section className='contact-section'>
            <div>
                <h4>Reach Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum a neque.</p>
                <p>Dhaka, Bangladesh</p>
                <p>Kafrul 1206</p>
                <p>+8801682440404</p>
                <p>contact@magicmanik.com</p>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input type="text" name="user_name" id="" placeholder='Enter your name' />
                    <input type="email" name="user_email" placeholder='Enter your email address' />
                    <textarea name="message" cols="50" rows="5" placeholder='Write your message' />
                    <input className='text-primary' type="submit" value="Send" />
                </form>
            </div>


        </section>
    );
};

export default Contact;