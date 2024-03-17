import React from "react";
import "./button2.scss"

const Button2 = ({text, path}) => {
  return (
    <button className="btn-r">
      <p>{text}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
        <path d={path}/>
      </svg>
    </button>
  );
};

export default Button2;
