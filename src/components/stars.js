import * as React from "react"
import { starsContainer, stars, stars2, stars3, stars4, stars5, stars6, starsTwo } from './stars.module.css';


const Stars = () => {

    return (
        <div id={starsContainer}>
            <div>
                <div className={stars}></div>
                <div className={stars2}></div>
                <div className={stars3}></div>
            </div>
            <div id={starsTwo}>
                <div className={stars4}></div>
                <div className={stars5}></div>
                <div className={stars6}></div>
            </div>
        </div>
    );
};

export default Stars;