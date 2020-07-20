import React from "react";

import ExampleImg from "../../../resources/images/example_img.jpg";

const About = () => {
  return (
    <section className="hero is-fullheight" id="About">
      <div className="hero-body">
        <img src={ExampleImg} alt="Example-img" className="about-me-img" />
        <div className="columns is-variable is-desktop">
          <div className="column is-desktop is-offset-1">
            <h1 className="about-me-title has-text-left">About Me</h1>
            <p className="about-me-subtitle line-height">
              I am a dedicated, hardworking and disciplined individual. I have a
              strong religious background which I believe has given good morals
              and ethics – including taking responsibility when required, being
              respectful and showing good manners. I believe that thinking
              positively will ultimately result in a positive outcome. My
              inspiration for coding came from a young age 7+. My Dad would
              bring computers from work and give it to me and my siblings to
              use. I’ve gained knowledge of how to build a computer, how to
              install an operating system, how to troubleshoot problems with the
              operating system and as a hobby I used to make videos, design
              logos and make 3D animations of the logo. Some time in High School
              I did some research on programming and I knew that I wanted to do
              programming as a full- time job. I started learning HTML in Grade
              11 from a website called{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
