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
        autoStart: false,
        delay: 10,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typewrite;
