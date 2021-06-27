import * as React from "react";
import { intro, introInnerContainer, introDescription, introPara, buttonsContainer } from './intro.module.css';
import { Link } from "gatsby";


const Intro = () => {
    return (
        <section id={intro}>
            <div id={introInnerContainer}>
                <h1>Cristian<br></br>Mioveanu</h1>
                <h2 id={introDescription}>Full-Stack Developer</h2>

                <p id={introPara}><span>Hello!</span> <br></br>I’m a web developer based in Kent, with a
                    passion for tech, design, and
                    meeting new people.</p>

                <div id={buttonsContainer}>
                    <button><Link to="#projects">Projects</Link></button>
                    <button>
                        <a href="https://github.com/cmioveanu" 
                        target="_blank"
                        rel="noreferrer">Github</a>
                    </button>
                </div>
            </div>
        </section>
    );
};


export default Intro;