import React from "react";
import "./Technology.scss";
import { motion } from "framer-motion";
import { TechnologyData } from "../../utils/data";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";

const Technology = () => {
  const openLinkInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div className="">
      <h2 className="head-text">Technologies</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {TechnologyData.map((tech, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "white", cursor: "pointer" }}
                onClick={() => openLinkInNewTab(tech.link)}
              >
                <img src={tech.image} alt={tech.title} />
              </div>
              <p className="p-text">{tech.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppContainer(
  MotionContainer(Technology, "app__skills"),
  "technology",
  "app__primarybg"
);
