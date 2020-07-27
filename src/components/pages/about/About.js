import React from "react";

import ExampleImg from "../../../resources/images/example-img.jpg";
import AboutmeImg from "../../../resources/images/About-me-img.jpg";

const About = () => {
  return (
    <section className="hero is-fullheight" id="About">
      <div className="hero-body">
        <div></div>
        <figure className="image figure-1">
          <img src={AboutmeImg} alt="Example-img" className="about-me-img" />
        </figure>

        <div className="columns is-variable is-desktop">
          <div className="column is-mobile is-desktop is-offset-1">
            <h1 className="about-me-title has-text-left">About Me</h1>
            <p className="about-me-subtitle line-height">
              I am a dedicated, hardworking and disciplined individual. I have a
              strong religious background which I believe has given good morals
              and ethics – including taking responsibility when required, being
              respectful and showing good manners. I believe that thinking
              positively will ultimately result in a positive outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
