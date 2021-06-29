import * as React from "react";
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import "../css/main.css";

import Seo from "../components/seo";
import Menu from "../components/menu";
import Stars from "../components/stars";
import Intro from "../components/intro";
import Profile from "../components/profile";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";


const IndexPage = () => (
  
  <main>
    <Stars />
    <Seo title="Home" />
    <Menu />
    <Intro />
    <Profile >
      <Skills />
    </Profile>
    <div className="canvasWrap">
                <canvas id="canvas"></canvas>
            </div>
    <Projects />
    <Contact />
  </main>
);

export default IndexPage;
