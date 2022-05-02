import React, { useContext } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

import "./Footer.scss";
import Wave from "../../img/wave.png";
import { themeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <img src={Wave} alt=""/>
      <div className="footer-content">
        <span style={{ color: darkMode ? "black" : "white" }}>phuonganhhoang.153@gmail.com</span>
        <div className="footer-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hpa153"
          >
            <FontAwesomeIcon icon={faGithubSquare} style={{ color: darkMode ? "black" : "white" }} size="3x" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/phuong-anh-hoang-6a0942144/"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: darkMode ? "black" : "white" }} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
