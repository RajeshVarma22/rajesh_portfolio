import React, { useState } from "react";
import { data, images } from "./projectList.js";
import "./projects.scss";
import Carousel1 from "../Animate/Carousel1.jsx";
import Projects_s_m_l from "./Projects_s_m_l.jsx";

const Projects = () => {
  const [gridSelector, setGridSelector] = useState(false);
  return (
    <section id="projects">
      <h1 id="pojects_title">
        <span className="project_title_span">Projects</span>
      </h1>

      <div id="desktop" className={gridSelector ? "" : "heightAdd"}>
        <div id="view_selector">
          <button
            className="btn_layout_selector"
            onClick={() => setGridSelector(!gridSelector)}
          >
            {gridSelector ? (
              <svg
                className="view_selector_icon"
                viewBox="0 0 30 20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M29 20H1C0.45 20 0 19.55 0 19V1C0 0.45 0.45 0 1 0H29C29.55 0 30 0.45 30 1V19C30 19.55 29.55 20 29 20ZM2 18H28V2H2V18Z" />
              </svg>
            ) : (
              <svg
                className="view_selector_icon"
                viewBox="0 0 91 90"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M82.104 39.965H59.922C55.022 39.965 51.038 35.981 51.038 31.092V8.893C51.038 3.993 55.021 0.00899887 59.922 0.00899887H82.104C87.004 0.00899887 91 3.993 91 8.893V31.092C91 35.981 87.004 39.965 82.104 39.965ZM59.922 8.893V31.092H82.127L82.104 8.893H59.922Z" />
                <path d="M32.061 39.965H9.87301C4.97301 39.965 0.989014 35.981 0.989014 31.092V8.893C0.989014 3.993 4.97301 0.00899887 9.87301 0.00899887H32.061C36.961 0.00899887 40.945 3.993 40.945 8.893V31.092C40.945 35.981 36.961 39.965 32.061 39.965ZM9.87301 8.893V31.092H32.072L32.061 8.893H9.87301Z" />
                <path d="M82.104 90.01H59.922C55.022 90.01 51.038 86.036 51.038 81.136V58.932C51.038 54.042 55.021 50.059 59.922 50.059H82.104C87.004 50.059 91 54.042 91 58.932V81.136C91 86.036 87.004 90.01 82.104 90.01ZM59.922 58.932V81.136H82.127L82.104 58.932H59.922Z" />
                <path d="M32.061 90.01H9.87301C4.97301 90.01 0.989014 86.036 0.989014 81.136V58.932C0.989014 54.042 4.97301 50.059 9.87301 50.059H32.061C36.961 50.059 40.945 54.042 40.945 58.932V81.136C40.945 86.036 36.961 90.01 32.061 90.01ZM9.87301 58.932V81.136H32.072L32.061 58.932H9.87301Z" />
              </svg>
            )}
          </button>
        </div>
        {gridSelector ? (
          <Projects_s_m_l dataObj={data} />
        ) : (
          <Carousel1 prop={data} />
        )}
        {/* <Carousel1 prop={data} /> */}
      </div>
      <div id="mobile_tablet">
        <Projects_s_m_l dataObj={data} />
      </div>
    </section>
  );
};

export default Projects;
