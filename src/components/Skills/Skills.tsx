import React from "react";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";
import "./Skills.scss";
import { motion } from "framer-motion";
import { TechSkillData } from "../../utils/data";
import { SkillEffect } from "./SkillEffect";

interface skillProps {}

const Skills: React.FC<skillProps> = () => {
  return (
    <>
      <h2 className="head-text">Technical Skills</h2>

      <div className="skills__container">
        <motion.div className="skills__list">
          {TechSkillData.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={index}
            >
              <p className="p-text">{skill.title}</p>
              <div className="app__flex">
                <SkillEffect done={`${skill.percentage}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppContainer(
  MotionContainer(Skills, "app__skills"),
  "skill",
  "app__whitebg"
);
