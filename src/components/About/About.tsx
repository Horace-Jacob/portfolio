import React from "react";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";
import "./About.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const About = () => {
  const openLinkInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div>
      <h2 className="head-text">
        Hello, my name is <br />{" "}
        <span style={{ color: "var(--teal-color)" }}>Lwin Oo Naing</span>
      </h2>
      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <div>
            I'm a{" "}
            <span
              style={{ color: "var(--teal-color)" }}
              className="animated-text"
            >
              <Typewriter
                words={[
                  "Junior Software Engineer",
                  "Problem Solving Enthusiast",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={100}
              />
            </span>
          </div>
        </motion.div>
      </div>
      <div className="certificate-section">
        <div className="certificate-web-link">
          <div onClick={() => openLinkInNewTab("https://www.algoexpert.io")}>
            AlgoExpert.io
          </div>
        </div>
        <div
          className="certificate-url"
          onClick={() =>
            openLinkInNewTab("https://certificate.algoexpert.io/AE-6567496c0d")
          }
        >
          Download Certificate
        </div>
      </div>
      <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="scroll-down-txt">
          <div className="txt">Scroll Down</div>
          <div className="scroll-down-btn"></div>
        </div>
      </Link>
    </div>
  );
};

export default AppContainer(
  MotionContainer(About, "app__about"),
  "about",
  "app__primarybg"
);
