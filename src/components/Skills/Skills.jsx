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
              {/* <m.div >
              </m.div> */}
            </m.div>
          );
        })}
      </m.div>

      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        focusable="false"
        class="chakra-icon css-1atfew4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "red" }}
      >
        <title></title>
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
      </svg>

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
