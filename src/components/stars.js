import * as React from "react"
import { stars, stars2, stars3 } from './stars.module.css';

const Stars = () => {

    return (
        <div>
            <div id={stars}></div>
            <div id={stars2}></div>
            <div id={stars3}></div>
        </div>
    );
};

export default Stars;