import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

import "./Works.scss";
import { themeContext } from "../../Context";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="works-left">
        <div className="info">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills in
          </span>
          <span>Technologies</span>
          <span>
            Throughout my education and internship, I have been recognized for exceptional capabilities in both front-end languages such as JavaScript, React, HTML and CSS,
            and back-end technologies like PHP, Node.JS and Java.
            <br />
            Besides, I also obtained in-depth database management skills, including MySQL, Oracle DB, and MongoDB.
            <br />
            Moreover, my education furthered me with solid understanding about TypeScript, UI/UX principles, RESTful APIs, Docker and Control Version Systems.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button">Contact Me</button>
          </Link>
        </div>
      </div>

      {/* right side */}
      <div className="works-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="works-mainCircle"
        >
          <div className="works-secCircle">
            <FontAwesomeIcon icon={faHtml5} size="3x" />
          </div>
          <div className="works-secCircle">
            <FontAwesomeIcon icon={faCss3} size="3x" />
          </div>
          <div className="works-secCircle">
            <FontAwesomeIcon icon={faJsSquare} size="3x" />
          </div>
          <div className="works-secCircle">
            <FontAwesomeIcon icon={faReact} size="3x" />
          </div>
          <div className="works-secCircle">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="works-backCircle blueCircle"></div>
        <div className="works-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
