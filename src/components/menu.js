import * as React from "react";
import { Link } from "gatsby";
import { header, mobileNav, desktopNav, openMenuButton, closeMenuButton, closeMenuBig } from './menu.module.css';


const Menu = () => {

  const [showMobile, setShowMobile] = React.useState(false);

  const hideMobile = () => setShowMobile(false);


  return (
    <header id={header}>

      {!showMobile ? null : <nav id={mobileNav}>
        <button id={closeMenuButton} onClick={hideMobile}>X</button>
        <ul>
          <li><Link to="#" onClick={hideMobile}>Intro</Link></li>
          <li><Link to="#profile" onClick={hideMobile}>Profile</Link></li>
          <li><Link to="#skills" onClick={hideMobile}>Skills</Link></li>
          <li><Link to="#projects" onClick={hideMobile}>Projects</Link></li>
          <li><Link to="#contact" onClick={hideMobile}>Contact</Link></li>
        </ul>
        <button id={closeMenuBig} onClick={hideMobile}>Close Menu</button>

      </nav>}


      <button id={openMenuButton} onClick={() => setShowMobile(true)}>
        <svg viewBox="0 0 80 80" width="35" height="35">
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
      </button>


      <nav id={desktopNav}><ul>
        <li><Link to="#">Intro</Link></li>
        <li><Link to="#profile">Profile</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul></nav>

    </header >
  );
};


export default Menu;
