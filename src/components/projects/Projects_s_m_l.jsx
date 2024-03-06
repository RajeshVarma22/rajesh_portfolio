import React from "react";
import "./projectsSML.scss";

const Projects_s_m_l = ({ dataObj }) => {
  return (
    <div id="Projectssml">
      {dataObj.map((item, index) => {
        return (
          <div className="projectCard" key={index}>
            <div className="headCard">
              <img src={item.img} alt="" />
            </div>
            <div className="bodycard">
              <div className="skills_used">
                {item.skills.map((skillSet) => {
                  return <p className="skills_names">{skillSet}</p>;
                })}
              </div>
              <div className="project_title_details">
                <h1 className="project_title">{item.title}</h1>
                <div className="project_demo">
                  <button className="btns btn_live">Live</button>
                  <button className="btns">View Code</button>
                  <button className="btns">Details</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects_s_m_l;
