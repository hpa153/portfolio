import React from "react";
import { Link } from "react-scroll";

import "./Card.scss";

const Card = ({ image, heading, detail }) => {
  return (
    <div className="card">
      <img src={image} alt={heading} />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="contact" spy={true} smooth={true}>
        <button className="card-button">LEARN MORE</button>
      </Link>
    </div>
  );
};

export default Card;
