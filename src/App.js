import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import About from "../src/components/pages/about/About";
import Skills from "../src/components/pages/about/Skills";
import Hobbies from "../src/components/pages/about/Hobbies";
import Work from "../src/components/pages/work/Work";
import Testimonials from "./components/pages/testimonials/TestimonialSection";
import Contact from "./components/pages/Contact";

import "./bulma-0.9.0/css/bulma.css";
import "bulma-tooltip/dist/css/bulma-tooltip.min.css";
import "./styles/styles.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <LandingPage />
        <About />
        <Skills />
        <Hobbies />
        <Work />
        <Testimonials />
        <Contact />
      </Fragment>
    </Router>
  );
}

export default App;
