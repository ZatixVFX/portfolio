import React from "react";

import Testimonials from "./Testimonials";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialSection = () => {
  return (
    <section className="hero is-medium" id="Testimonials">
      <div className="hero-header has-text-centered">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">This is what my peers have to say about me</h2>
      </div>
      <div className="hero-body">
        <OwlCarousel
          className="owl-theme"
          items="1"
          nav
          dots
          loop
          margin={10}
          navText={[
            [`<i class="fas fa-arrow-left fa-2x"></i>`],
            [`<i class="fas fa-arrow-right fa-2x"></i>`],
          ]}
        >
          {Testimonials.map((t, id) => (
            <div className="columns item">
              <div className="column is-10-desktop is-offset-1" key={id}>
                <div className="box" style={{ padding: "4.25rem !important" }}>
                  <article className="media">
                    <div
                      className="media-left"
                      style={{ marginLeft: "-3rem !important" }}
                    >
                      <figure
                        className="image"
                        style={{ height: "197px", width: "332px" }}
                      >
                        <img
                          src={t.img}
                          alt={t.name}
                          style={{ width: "100%", maxHeight: "100%" }}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p style={{ fontSize: "25px" }}>
                          <b>&#8220;</b>
                          {t.qoute}
                          <b>&#8221;</b> - <b>{t.name}</b>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
