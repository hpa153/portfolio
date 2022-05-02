import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import "./Intro.scss";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import books from "../../img/books.png";
import mobile from "../../img/mobile.png";
import web from "../../img/web.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const [letterClass, setLetterClass] = useState("text-animate");
  const greetingArray = ["H", "i", "!", " ", "I", "'", "m", ];
  const nameArray = ["P", "h", "u", "o", "n", "g", " ", "A", "n", "h"];

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3500)
  }, [])

  return (
    <div className="intro" id="intro">
      {/* left name side */}
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={10}
            />
          </span>
          <span className="orange">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
          </span>
          <p>
            It all started when I tried to produce a web crawler, just being subject to curiosity, which, back then, did not run.
          </p> 
          <p>
            Through days and nights figuring out how to fix that issue, I did not only find success in that small application, but also found myself in love with programming. 
          </p>
          <p>
          For me, programming is not just a job, it is a whole new world with engaging challenges to continually learn and go beyond the limits.
          </p>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button">Contact Me</button>
        </Link>

        {/* social icons */}
        <div className="intro-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hpa153"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/phuong-anh-hoang-6a0942144/"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
        </div>
      </div>

      {/* right image side */}
      <div className="intro-right">
        <img src={Vector1} alt="design" />
        <img src={Vector2} alt="design" />
        <img src={boy} alt="phuong anh" />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "5%" }}
          transition={transition}
          src={books}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "76%" }}
          whileInView={{ left: "63%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={web} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={mobile} text1="Mobile" text2="Developer" />
        </motion.div>

        <div className="blur"></div>
        <div className="blur intro-blur"></div>
      </div>
    </div>
  );
};

export default Intro;
