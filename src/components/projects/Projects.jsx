import React from "react";
import { data, images } from "./projectList.js";
import "./projects.scss";
import Carousel from "../Animate/carousel/Carousel.jsx";
import Carousel1 from "../Animate/Carousel1.jsx";
import Projects_s_m_l from "./Projects_s_m_l.jsx";

const Projects = () => {
  return (
    <section id="projects">
      {/* <Carousel images={images}/> */}

      {/* <div id ="desktop">
        <Carousel1 prop={data} />
      </div>
      <div id="mobile_tablet">
        <Projects_s_m_l dataObj={data} />
      </div> */}
        <Projects_s_m_l dataObj={data} />
    </section>
  );
};

export default Projects;
