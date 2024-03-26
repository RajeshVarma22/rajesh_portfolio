import React from "react";
import "./sectionDividerTriangle.scss";
import { motion as m } from "framer-motion";

const SectionDividerTriangle = () => {
  const parentVariants = {
    hidden: { opacity: 0.5 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    show: {
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="SectionDividerTriangle">
      <div class="custom-shape-divider-top-1710119460">
        <m.svg
          variants={parentVariants}
          initial="hidden"
          animate="show"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <m.path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            id="shape_triangle"
            variants={pathVariants}
          ></m.path>
        </m.svg>
      </div>
    </div>
  );
};

export default SectionDividerTriangle;
