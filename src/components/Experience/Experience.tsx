import React from "react";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";
import { Experiences } from "../../utils/data";
import "./Experience.scss";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Freelance</span> <br />
        And <span>Experience</span>
      </h2>

      <div className="app__profiles">
        {Experiences.map((exp, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={exp.image} alt={exp.name} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {exp.name}
            </h2>
            <p className="text" style={{ marginTop: 10 }}>
              {exp.date}
            </p>
            <p className="type" style={{ marginTop: 10 }}>
              {exp.type}
            </p>
            <p className="p-text" style={{ marginTop: 10 }}>
              {exp.whatToDo}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppContainer(
  MotionContainer(Experience, "app__about"),
  "experience",
  "app__primarybg"
);
