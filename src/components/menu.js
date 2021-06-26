import * as React from "react";
import { Link } from "gatsby";


const Menu = () => (
  <header id="header">
    <nav>
      <ul>
        <li><Link to="#header">Intro</Link></li>
        <li><Link to="#profile">Profile</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </nav>
  </header >
);


export default Menu;
