import "./responsive.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import SectionDivider1 from "./components/SectionDividers/SectionDivider1";
import SectionDividerTriangle from "./components/SectionDividers/SectionDividerTriangle";
import SectionDividerCurve from "./components/SectionDividers/SectionDividerCurve";
import Projects from "./components/projects/Projects";
import Test from "./components/Test";
import Preloading from "./components/preLoader/Preloading";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isLoadingBars, setLoadingBars] = useState(false);

  console.log("Top useEffect");

  // useEffect(() => {
  //   console.log("Entered useEffect before return");

  //   return () => {
  //     console.log("Entered useEffect");
  //     setTimeout(() => {
  //       setLoadingBars(true);
  //     }, 5300);

  //     setTimeout(() => {
  //       setLoading(true);
  //       console.log("setTimeout 6300 working");
  //     }, 6300);
  //     console.log("End useEffect");
  //   };
  // }, [isLoading]);

  useEffect(() => {
    console.log("Entered useEffect");
  
    const setLoadingTimeout = setTimeout(() => {
      setLoadingBars(true);
      console.log("setTimeout 5300 working");
    }, 5300);
  
    const setLoadingBarsTimeout = setTimeout(() => {
      setLoading(true);
      console.log("setTimeout 6300 working");
    }, 6300);
  
    return () => {
      clearTimeout(setLoadingTimeout);
      clearTimeout(setLoadingBarsTimeout);
      console.log("Cleanup useEffect");
    };
  }, []); // No dependencies
  
  console.log("After useEffect");

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      {/* <Preloading /> */}

      {isLoading ? (
        <>
          <Navbar />
          <div id="home_page">
            <Home />
          </div>
          <div id="about_page">
            <SectionDivider1 />
            <About />
          </div>
          <div id="skills_page">
            <SectionDividerCurve />
            <Skills />
          </div>
          <div id="projects_page">
            <SectionDivider1 />
            <Projects />
          </div>{" "}
        </>
      ) : (
        <Preloading isLoadingBars={isLoadingBars} />
      )}

      {/* <div id="dividers">
              <SectionDividerTriangle />
            </div>
            <div className="divider_Component">
            </div> */}
      {/* <Test /> */}
      {/* <Carousel1 prop={data}/> */}
      {/* <Projects_s_m_l dataObj={data}/> */}
    </div>
  );
}

export default App;
