// Navbar.js

import React, { useState } from "react";
import "./navbar.scss";
import AnimatedLog from "../preLoader/AnimatedLog";
import { motion as m } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const parentVariants = {
    hidden: { rotate: -180 },
    show: {
      rotate: 0,
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
        duration: 10,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <m.svg
            variants={parentVariants}
            initial="hidden"
            animate="show"
            width={122}
            height={61}
            viewBox="0 0 361 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_18_76)">
              <m.path
                variants={pathVariants}
                stroke="#0da4b8"
                stroke-width={2}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.04543 4.21199C2.28472 3.74072 2.61867 2.56753 3.51353 2.56753V2.56753L125.656 3.92839L135.706 5.20487L143.74 6.66283C144.047 6.71842 144.347 6.8025 144.638 6.91397L154.928 10.8597L166.224 17.0094L172.436 21.5526C172.832 21.8421 173.183 22.1884 173.478 22.5801L177.376 27.7555C177.55 27.986 177.703 28.231 177.834 28.4879L182.042 36.7183C182.307 37.2371 182.48 37.7982 182.552 38.3763L183.478 45.8186C183.526 46.2007 183.529 46.5871 183.488 46.9699L182.523 55.9629C182.487 56.3025 182.416 56.6375 182.311 56.9626L180.6 62.2741L177.87 67.9625C177.722 68.2702 177.544 68.5619 177.337 68.8332L171.444 76.5518C171.183 76.8938 170.879 77.2007 170.539 77.4648L161.388 84.5815C161.17 84.7509 160.939 84.9019 160.696 85.0331L152.101 89.6785C151.749 89.8687 151.371 90.0054 150.978 90.0839V90.0839C147.796 90.7215 146.64 94.6709 148.976 96.9238L196.793 143.039C198.889 145.06 202.262 144.87 204.117 142.626L316.804 6.33927C317.607 5.3672 318.749 4.73481 319.999 4.56885L350.612 0.505702C355.121 -0.0926461 358.022 5.15003 355.121 8.65207L220.524 171.119C219.582 172.256 218.185 172.919 216.708 172.929L183.158 173.159C181.809 173.168 180.513 172.631 179.565 171.671L83.3473 74.1767C80.2294 71.0174 82.4674 65.6645 86.906 65.6645H121.728C122.14 65.6645 122.55 65.6136 122.949 65.513L130.036 63.7277C130.724 63.5543 131.368 63.2364 131.924 62.7952L137.554 58.3253C137.927 58.0292 138.256 57.6813 138.531 57.2922L139.828 55.4533C140.33 54.742 140.638 53.9119 140.721 53.0452L140.946 50.6776C140.995 50.1723 140.966 49.6626 140.86 49.1661L140.201 46.0547C140.109 45.6212 139.96 45.2017 139.758 44.8075L138.331 42.0295C138.1 41.5794 137.802 41.1669 137.447 40.8062L134.606 37.9193C134.042 37.3467 133.349 36.9183 132.584 36.6705L127.753 35.1034C127.215 34.929 126.651 34.8471 126.086 34.8611L48.4456 36.7883C47.1148 36.8213 45.8257 36.3223 44.864 35.4017L29.601 20.7912C29.3492 20.5502 29.0729 20.3362 28.7767 20.1526L3.04543 4.21199ZM25.7427 4.54929C20.5145 4.40284 18.5996 11.3674 23.1678 13.9144L29.7452 17.5817C30.0798 17.7682 30.3918 17.9926 30.6752 18.2504L45.8671 32.0726C46.8196 32.9393 48.0697 33.405 49.3571 33.3728L126.424 31.4443C126.989 31.4302 127.553 31.5121 128.091 31.6866L133.812 33.542C134.576 33.7898 135.269 34.2182 135.833 34.7908L139.464 38.4803C139.819 38.841 140.117 39.2535 140.348 39.7036L142.244 43.3953C142.446 43.7895 142.596 44.209 142.688 44.6425L143.594 48.9185C143.699 49.415 143.728 49.9247 143.68 50.4299L143.289 54.5245C143.207 55.3913 142.899 56.2214 142.397 56.9327L140.279 59.9334C140.005 60.3225 139.676 60.6704 139.303 60.9665L132.931 66.025C132.375 66.4662 131.732 66.784 131.044 66.9574L123.252 68.9202C122.827 69.0272 122.39 69.0779 121.952 69.0711L94.4086 68.6378C89.9168 68.5671 87.6178 73.9955 90.7941 77.1724L181.738 168.133C182.67 169.064 183.932 169.591 185.25 169.597L215.08 169.744C216.578 169.752 218 169.087 218.956 167.934L347.7 12.4928C350.645 8.93713 347.609 3.63077 343.051 4.36749L320.926 7.94394C319.729 8.13735 318.644 8.75879 317.871 9.69268L204.253 147.028C202.395 149.274 199.018 149.461 196.924 147.434L144.049 96.2686C141.22 93.5314 142.517 88.7504 146.341 87.8178L149.964 86.9343C150.38 86.8329 150.781 86.6787 151.157 86.4753L159.46 81.9875C159.703 81.8563 159.935 81.7052 160.152 81.5358L168.845 74.7761C169.185 74.512 169.489 74.2051 169.75 73.8631L175.196 66.7286C175.403 66.4574 175.582 66.1656 175.73 65.8579L178.191 60.7281L179.692 56.0707C179.797 55.7456 179.868 55.4106 179.904 55.0709L180.769 47.0069C180.81 46.6241 180.807 46.2377 180.76 45.8556L179.984 39.6278C179.912 39.0497 179.74 38.4886 179.474 37.9698L175.716 30.6181C175.585 30.3612 175.431 30.1162 175.258 29.8858L171.801 25.2966C171.506 24.9048 171.155 24.5586 170.759 24.2691L165.019 20.0709L154.006 14.0757L144.056 10.2599C143.765 10.1485 143.465 10.0644 143.158 10.0088L135.382 8.59767L125.511 7.34394L25.7427 4.54929Z"
                // fill="#FE0101"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_18_76"
                x="-1.37689"
                y="0.458618"
                width="361.662"
                height="180.7"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_18_76"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_18_76"
                  result="shape"
                />
              </filter>
            </defs>
          </m.svg>
        </div>
      </div>
      <div className={`navbar__right ${isOpen ? "open" : ""}`}>
        <button className="navbar__button">Home</button>
        <button className="navbar__button">About</button>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
