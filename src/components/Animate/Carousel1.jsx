import React, { useRef, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cs1.css";
import { motion } from "framer-motion";

const Carousel1 = ({ prop }) => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickSeemore = () => {};

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  // let ss = 10;
  // const handleTarget = (index, item) => {
  //   // let items = slideRef.current.querySelectorAll(".item");

  //   // slideRef.current.appendChild(items[index])

  //   let items = slideRef.current.querySelectorAll(".item");
  //   if (index > 0) {
  //     slideRef.current.appendChild(items[index - 1]);
  //   } else if(index > 2) {
  //     slideRef.current.appendChild(items[index+1]);
  //   } else{
  //     slideRef.current.appendChild(items[index]);

  //   }
  //   // slideRef.current.appendChild(items[index]);
  //   console.log("Length", prop.length);
  //   console.log("Array", prop);
  //   console.log("Items[Index]", items[index])

  //   console.log("Item", item);

  //   console.log("Index", index);

  //   ss += 1

  //   console.log("Waste",ss)
  // };

  return (
    <div id="Carousel_container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {prop.map((item, index) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
            // onClick={() => handleTarget(index, item)}
          >
            <div className="content">
              <div className="name">{item.title}</div>
              {/* <div className="des">{item.description}</div> */}
              <button className="btn_seeMore" onClick={handleClickSeemore}>
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          &lt;
        </button>
        <button id="next" onClick={handleClickNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
