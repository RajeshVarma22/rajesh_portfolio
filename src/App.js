import "./responsive.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import SectionDivider1 from "./components/SectionDividers/SectionDivider1";
import SectionDividerTriangle from "./components/SectionDividers/SectionDividerTriangle";
import SectionDividerCurve from "./components/SectionDividers/SectionDividerCurve";
import Projects from "./components/projects/Projects";
import Preloading from "./components/preLoader/Preloading";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Preloading /> */}

      <div id="home_page">
        <div id="dividers">
          <SectionDividerTriangle />
        </div>
        <div className="divider_Component">
          <Home />
        </div>
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
      </div>

      {/* <Test /> */}
      {/* <Carousel1 prop={data}/> */}
      {/* <Projects_s_m_l dataObj={data}/> */}
    </div>
  );
}

export default App;
