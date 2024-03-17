import React from "react";
import Typewriter from "typewriter-effect";

function Typewrite() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Python Developer"
        ],
        autoStart: true,
        delay: 10,
        loop: true,
        deleteSpeed: 60
      }}
    />
  );
}

export default Typewrite;
