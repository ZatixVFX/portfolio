import React from "react";

import Navbar from "../layout/Navbar";

const LandingPage = () => {
  return (
    <section className="hero landing-page-bg is-fullheight" id="landing-page">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white">
            {" "}
            Hello, My name is Junaid Salie <br /> and I'am a full stack
            developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
