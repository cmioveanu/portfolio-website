import * as React from "react";
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import "../css/main.css";

import Seo from "../components/seo";
import Stars from "../components/stars";
import Intro from "../components/intro";
import Profile from "../components/profile";
import Skills from "../components/skills";


const IndexPage = () => (
  <main>
    <Stars />
    <Seo title="Home" />

    <Intro />
    <Profile >
      <Skills />
    </Profile>

  </main>
);

export default IndexPage;
