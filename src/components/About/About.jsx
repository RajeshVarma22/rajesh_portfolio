import React from "react";
import "./about.scss";
import about_me from "../../assets/about_me.png";
import experience from "../../assets/Experience.png";
import { motion as m } from "framer-motion";
import { parentVarints } from "../Animate/parentVarients";

const About = () => {
  const rightLeftAnimate = {
    hidden: { x: "10%", y: "30%", opacity: 0.5 },
    show: {
      x: "0%",
      y: "0%",
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  const leftRightAnimate = {
    hidden: { x: "-10%", y: "30%", opacity: 0.5 },
    show: {
      x: "0%",
      y: "0%",
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section id="About">
      <div>
        <div className="about_heading_cont">
          <m.h1
            className="heading_text"
            whileInView={{ backgroundPosition: "left bottom" }}
          >
            <m.span
              variants={parentVarints}
              initial="hidden"
              whileInView="show"
            >
              About Me
            </m.span>
          </m.h1>
        </div>
        <div id="summary">
          <m.p
            id="detailed_info"
            variants={leftRightAnimate}
            initial="hidden"
            whileInView="show"
          >
            Dedicated MERN Stack Developer with proficiency in HTML, CSS, SASS,
            JavaScript, Bootstrap, ReactJs, Redux, NodeJs, ExpressJs and,
            Python. Committed to creating user-centric web experiences. Holds a
            Bachelor's degree in Computer Science. Enthusiastic about
            contributing skills to dynamic projects.
          </m.p>
          <m.img
            variants={rightLeftAnimate}
            initial="hidden"
            whileInView="show"
            src={about_me}
            className="about_me_img"
            alt="about_me_img"
          />
        </div>
      </div>
      <div id="experience">
        <m.img
          variants={leftRightAnimate}
          initial="hidden"
          whileInView="show"
          src={experience}
          className="experience_img"
          alt="experience_img"
        />
        <m.div
          className="deatils"
          variants={rightLeftAnimate}
          initial="hidden"
          whileInView="show"
        >
          <div className="exp_position">
            <h1>Junior Frontend Web Developer at IRIS.</h1>
            <h3>June 2023 - Jan 2024</h3>
          </div>
          <p>
            <span>&minus;</span> Developed UI using ReactJs, SASS/SCSS, HTML,
            CSS, JavaScript, Bootstrap.
          </p>
          <p>
            <span>&minus;</span> Collaborated with senior team members to create
            innovative and visually appealing web solutions.
          </p>
          <p>
            <span>&minus;</span> Gained practical experience in real-world web
            development practices.
          </p>
          <p>
            <span>&minus;</span> Developed a keen understanding of professional
            web development practices.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default About;
