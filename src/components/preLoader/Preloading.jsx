import React, { useEffect, useState } from "react";
import "./preloading.scss";
import { motion as m } from "framer-motion";
import AnimatedLog from "./AnimatedLog";

const Preloading = ({ isLoadingBars }) => {
  const firstNameAnimate = {
    hidden: {
      x: "-30%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 0.58,
      transition: {
        duration: 1,
        // ease: "ease"
      },
    },
  };
  const lastNameAnimate = {
    hidden: {
      x: "30%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 0.57,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div id="Preloading">
      {/* {isLoadingBars ? (
        <div id="barsContainer">
          {[...Array(10)].map((_, index) => (
            <m.div
              key={index}
              whileInView={{
                backgroundPosition: "left bottom",
                transitionDelay: "5.1s",
              }}
              className="bars"
              id={`bar${index + 1}`}
            ></m.div>
          ))}
        </div>
      ) : (
        <div id="innerContent">
          <m.h1
            variants={firstNameAnimate}
            initial="hidden"
            animate="show"
            className="my_name_bg"
            id="first_name"
          >
            Rajesh
          </m.h1>
          <div id="logo_container">
            <div id="logo_component">
              <AnimatedLog />
            </div>
          </div>
          <m.h1 variants={lastNameAnimate} initial="hidden" animate="show">
            <span className="my_name_bg" id="last_name">
              Varma
            </span>
          </m.h1>
        </div>
      )} */}

      <div id="innerContent">
        <m.h1 variants={firstNameAnimate} initial="hidden" animate="show">
          <span className="my_name_bg" id="first_name">
            Rajesh
          </span>
        </m.h1>
        <div id="logo_container">
          <div id="logo_component">
            <AnimatedLog />
          </div>
        </div>
        <m.h1 variants={lastNameAnimate} initial="hidden" animate="show">
          <span className="my_name_bg" id="last_name">
            Varma
          </span>
        </m.h1>
      </div>
    </div>
  );
};

export default Preloading;
