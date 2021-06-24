import * as React from "react";
import { introSection, introDescription, container, introPara, buttonsContainer } from './intro.module.css';


const Intro = () => {
    return (
        <section id={introSection}>
            <div id={container}>
                <h1>Cristian<br></br>Mioveanu</h1>
                <h2 id={introDescription}>Full-Stack Developer</h2>

                <p id={introPara}><span>Hello!</span> <br></br>I’m a web developer based in Kent, with a
                    passion for tech, design, and
                    meeting new people.</p>

                <div id={buttonsContainer}>
                    <button>Projects</button>
                    <button>Github</button>
                </div>
            </div>
        </section>
    );
};


export default Intro;