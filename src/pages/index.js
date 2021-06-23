import * as React from "react";
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import "../css/main.css";

import Seo from "../components/seo";
import Stars from "../components/stars";
import Intro from "../components/intro";
import About from "../components/about";

const IndexPage = () => (
  <main>
    <Stars />
    <Seo title="Home" />

    <Intro />
    <About />
  </main>
);

export default IndexPage;
