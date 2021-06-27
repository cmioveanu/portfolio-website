import * as React from 'react';
import { project, iconsContainer, buttonsContainer } from "./IndividualProject.module.css";


const IndividualProject = ({ projectName, photoSrc, photoAlt, description, live, github, githubShow, children }) => {
    return (
        <section className={project}>
            <img src={photoSrc} alt={photoAlt} />

            <div id={iconsContainer}>{children}</div>

            <h3>{projectName}</h3>

            <p>{description}</p>

            <div id={buttonsContainer}>
                <button>
                    <a href={live} target="_blank" rel="noreferrer">Live</a>
                </button>

                {
                    !githubShow ? null : <button>
                        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                    </button>
                }
            </div>
        </section>
    );
};


export default IndividualProject;