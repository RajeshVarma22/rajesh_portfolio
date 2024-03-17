import React from "react";
import "./preloading.scss";
import {motion as m} from "framer-motion";

const Preloading = () => {
  return (
    <div id="Preloading">
      <div id="welcome_msg_container">
        <div id="welcome_msg">
          <m.h1 className="bars" id="bar1" animate={{backgroundPosition : "left bottom"}}><span className="animate_charecter">W</span></m.h1>
          <h1 className="bars" id="bar2"><span className="animate_charecter">E</span></h1>
          <h1 className="bars" id="bar3"><span className="animate_charecter">L</span></h1>
          <h1 className="bars" id="bar4"><span className="animate_charecter">C</span></h1>
          <h1 className="bars" id="bar5"><span className="animate_charecter">O</span></h1>
          <h1 className="bars" id="bar6"><span className="animate_charecter">M</span></h1>
          <h1 className="bars" id="bar7"><span className="animate_charecter">E</span></h1>
          <h1 className=" bars" id="bar8"><span>🙂</span></h1>
        </div>
      </div>
      
    </div>
  );
};

export default Preloading;
