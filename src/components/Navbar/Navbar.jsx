import React from "react";
import { Link } from "react-scroll";

import ProfilePic from "../../img/profile-pic.png"
import Toggle from "../Toggle/Toggle";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div className="nav-wrapper" id="Navbar">
      {/* left side of navbar */}
      <div className="nav-left">
        <img src={ProfilePic} alt="profile" />
        <Toggle />
      </div>
      {/* right side of navbar */}
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
