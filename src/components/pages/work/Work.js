import React from "react";

import prj from "./Projects";
import HelpingHandHeartIcon from "../../../resources/images/helping-hand-heart-icon.png";

const Work = () => {
  return (
    <section className="hero is-fullheight" id="Work">
      <div className="hero-header has-text-centered">
        <h1 className="title header-title">Work</h1>
        <h2 className="subtitle">View my work</h2>
        <div className="horizontal-line"></div>
      </div>
      <div className="hero-body work-body-spacing">
        <div className="columns is-variable is-desktop" style={gridstyle}>
          {prj.map((p, id) => (
            <div
              className={`column hover-effect is-12-desktop is-8-1920px ${p.offset}`}
              data-aos="zoom-in"
              data-aos-duration="500"
              key={id}
            >
              <div className="card">
                <div className="card-image">
                  <figure
                    className="image image-box"
                    style={{ overflow: "hidden" }}
                  >
                    <img src={p.Img} alt={p.Name} className="img-size" />
                    <div className="after has-text-centered">
                      <div className="image-overlay">
                        <p style={{ marginTop: "6rem" }}>{p.Name}</p>
                        <a
                          href={p.Link}
                          className="button is-link is-inverted is-outlined button-hover"
                          style={{ marginTop: "0.6rem" }}
                          rel="noopener noreferrer"
                          target="_blank"
                          data-tooltip={p.tooltip}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-body">
        <img
          src={HelpingHandHeartIcon}
          alt="Helping hand heart icon"
          className="helping-hand-icon"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        />
        <div className="columns is-variable is-desktop" data-aos="fade-left">
          <div className="column is-9-desktop is-offset-2">
            <h1 className="title has-text-left">Volunteer work</h1>
            <p style={{ fontSize: "19px" }}>
              <b>Company: </b> {`SSS (Sports Stepping Stones)`}
              <br />
              <b>Period: </b> 2 months+
              <br />
              <b>Role: </b> To help out the team with the children
            </p>
            <b style={{ fontSize: "19px" }}>Duties:</b>
            <ul
              style={{
                listStyleType: "circle",
                listStylePosition: "outside",
                marginLeft: "4.82rem",
                fontSize: "19px",
              }}
            >
              <li>Help feed the children</li>
              <li>
                Help with activities with children (such as sports drills and
                fun outside activities)
              </li>
              <li>Helping in disciplining the children</li>
              <li>
                Helping to bring in the children from their transport vehicle
                and escorting the children to their transport vehicle to go
                home.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem",
};

export default Work;
