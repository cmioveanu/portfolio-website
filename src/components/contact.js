import * as React from "react";
import { contact } from "./contact.module.css";


const Contact = () => {
    return (
        <section id="contact" className={contact}>
            <h2>Contact</h2>
            <form>
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