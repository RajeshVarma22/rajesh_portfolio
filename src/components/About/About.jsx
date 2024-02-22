import React from "react";
import "./about.scss";
import about_me from "../../assets/about_me.png";
import experience from "../../assets/Experience.png";
import { motion as m } from "framer-motion";
import { parentVarints } from "../Animate/parentVarients";

const About = () => {
  return (
    <section id="About">
      <div className="about_heading_cont">
        <m.h1
          className="heading_text"
          whileInView={{ backgroundPosition: "left bottom" }}
        >
          <m.span variants={parentVarints} initial="hidden" whileInView="show">
            About Me
          </m.span>
        </m.h1>
      </div>
      <div id="summary">
        <p id="detailed_info">
          Dedicated MERN Stack Developer with proficiency in HTML, CSS, SASS,
          JavaScript, Bootstrap, ReactJs, Redux, NodeJs, ExpressJs and, Python.
          Committed to creating user-centric web experiences. Holds a Bachelor's
          degree in Computer Science. Enthusiastic about contributing skills to
          dynamic projects.
        </p>
        <img src={about_me} className="about_me_img" alt="about_me_img" />
      </div>
      <div id="experience">
        <img src={experience} className="experience_img" alt="experience_img" />
        <p className="deatils">
          Dedicated MERN Stack Developer with proficiency in HTML, CSS, SASS,
          JavaScript, Bootstrap, ReactJs, Redux, NodeJs, ExpressJs and, Python.
          Committed to creating user-centric web experiences. Holds a Bachelor's
          degree in Computer Science. Enthusiastic about contributing skills to
          dynamic projects.
        </p>
      </div>
    </section>
  );
};

export default About;
