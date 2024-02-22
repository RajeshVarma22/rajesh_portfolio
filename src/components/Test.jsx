import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  const parentStyle = {
    borderRadius: "5px",
    background:
      "linear-gradient(to left, rgb(0, 225, 255) 50%, transparent 50%)",
    backgroundSize: " 200% 100%",
    backgroundPosition: " right bottom",
    transition: "all 0.8s ease-out",
  };
  const parentVarints = {
    hidden: {
      y: "150%",
    },
    show: {
      y: "0%",
      transition: { duration: 1, delay: 0.8 },
    },
  };
  return (
    <div id="Test" style={{backgroundColor: "red"}}>
      <motion.div
        className="childElements"
        whileInView={{ backgroundPosition: "left bottom" }}
      >
        <motion.h1 variants={parentVarints} initial="hidden" whileInView="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti?</motion.h1>
      </motion.div>
    </div>
  );
};

export default Test;
