import React from "react";
import "./projectsSML.scss";

const Projects_s_m_l = ({ dataObj }) => {
  return (
    <div id="Projectssml">
      {dataObj.map((item, index) => {
        return (
          <div className="projectCard">
            <div className="headCard">
              <img src={item.img} alt="" />
            </div>
            <div className="bodycard">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects_s_m_l;
