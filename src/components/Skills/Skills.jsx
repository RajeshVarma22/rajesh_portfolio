import React from "react";
import "./skills.scss";
import skillsSymbols from "./skillsLogos";
import { motion as m } from "framer-motion";
import {
  parentVarints,
  stagger,
  staggerChildItem,
} from "../Animate/parentVarients";

const Skills = () => {
  return (
    <section id="Skills">
      <div id="Skills_heading_cont">
        <m.h1
          id="Skills_heading"
          whileInView={{ backgroundPosition: "left bottom" }}
        >
          <m.span
            variants={parentVarints}
            initial="hidden"
            whileInView={"show"}
          >
            Skills
          </m.span>
        </m.h1>
      </div>
      <m.div
        id="Skills_container"
        variants={stagger}
        initial="hidden"
        whileInView="show"
      >
        {skillsSymbols.map((skill) => {
          return (
            <m.div
              className="skill"
              variants={staggerChildItem}
              whileHover={{
                translateY: "-10px",
                transition: { duration: 0.5 },
              }}
            >
              <img
                className="skill_Img"
                src={skill.img}
                alt={`${skill.name}`}
              />
              <h3>{skill.name}</h3>

            </m.div>
          );
        })}
      </m.div>

     

      {/* <div id="Skills_container">
        <AnimatePresence >
        {skillsSymbols.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transitionDuration: "0.5s" }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            className="skill"
          >
            <img className="skill_Img" src={skill.img} alt={`${skill.name}`} />
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
        </AnimatePresence>
      </div> */}
    </section>
  );
};

export default Skills;
