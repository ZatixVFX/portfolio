import React from "react";
import { Link } from "react-scroll";

import JunaidSalieLogo from "../../resources/images/JunaidSalieLogo.png";

class Navbar extends React.Component {
  state = {
    navBackground: "transparent",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "#C98642";

      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: `${this.state.navBackground}` }}
      >
        <div className="navbar-brand">
          <Link
            activeClass="active"
            to="landing-page"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-item"
          >
            <img
              src={JunaidSalieLogo}
              alt="JunaidSalieLogo"
              width={112}
              height={28}
            />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="Hobbies"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Hobbies
            </Link>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="Testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Testimonials
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
