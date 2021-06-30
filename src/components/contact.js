import * as React from "react";
import { contact, contactForm, sayHello } from "./contact.module.css";


const Contact = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const details = {
            'name': name,
            'email': email,
            'message': message
        };

        let formBody = [];
        for (const property in details) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");


        fetch('PHPMailer/sendMail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });

    }


    return (
        <section id="contact" className={contact}>
            <h2>Contact</h2>

            <p id={sayHello}><span>Say hello!</span> <br></br>Send me a message to talk about anything.
                <br></br>I look forward to hearing from you!</p>

            <form id={contactForm}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" onChange={(e) => setName(e.target.value)}></input>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>

                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit" onClick={handleSubmit}>Send</button>
            </form>
        </section>
    );
};


export default Contact;