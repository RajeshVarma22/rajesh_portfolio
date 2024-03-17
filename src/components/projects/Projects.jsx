import React from "react";
import { data, images } from "./projectList.js";
import "./projects.scss";
import Carousel1 from "../Animate/Carousel1.jsx";
import Projects_s_m_l from "./Projects_s_m_l.jsx";

const Projects = () => {
  return (
    <section id="projects">
      
      <h1 id="pojects_title">
        <span className="project_title_span">Projects</span>
      </h1>

      <div id="desktop">
        <Carousel1 prop={data} />
      </div>
      <div id="mobile_tablet">
        <Projects_s_m_l dataObj={data} />
      </div>
    </section>
  );
};

export default Projects;
