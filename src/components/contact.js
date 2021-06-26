import * as React from "react";
import { contact, contactForm } from "./contact.module.css";
import Stars from "./stars";


const Contact = () => {
    return (
        <section id="contact" className={contact}>
            <Stars />
            <h2>Contact</h2>
            <form id={contactForm}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"></input>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email"></input>

                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="5"></textarea>
            </form>
        </section>
    );
};


export default Contact;