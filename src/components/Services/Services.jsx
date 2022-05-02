import React, { useContext } from "react";
import { motion } from "framer-motion";

import "./Services.scss";
import Card from "../Card/Card";
import backend from "../../img/backend.png";
import frontend from "../../img/frontend.png";
import phone from "../../img/phone.png";
import { themeContext } from "../../Context";
import Resume from './Resume - Phuong Anh Hoang.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="info">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My awesome</span>
        <span>Skills</span>
        <span>
        In my previous occupation as customer support agent granted me other valuable skills such as work and stress management skills, 
        and especially communication skills to make the most out of group as well as individual tasks. 
        <br />
        In the environment of an IT company, I am also used to various collaborative development tools such as JIRA, Trello, and Slack. 
        The task of a fraud analyst leader also built up excellent analytical skills to diagnose and solve arising issues.
        </span>
        <a href={Resume} download>
          <button className="button">Download CV</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        {/* 1st card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            image={backend}
            heading={"Back End"}
            detail={"NodeJS, Java, MySQL, MongoDB, Oracle DB"}
          />
        </motion.div>
        {/* 2nd card */}
        <motion.div
          initial={{ left: "-11rem", top: "15rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            image={frontend}
            heading={"Front End"}
            detail={"HTML5, CSS3, JavaScript, ReactJS, TypeScript"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "20rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            image={phone}
            heading={"Mobile"}
            detail={
              "React Native"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
