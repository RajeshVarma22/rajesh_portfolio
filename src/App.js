import About from "./components/About/About";
import Carousel1 from "./components/Animate/Carousel1";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Projects_s_m_l from "./components/projects/Projects_s_m_l";
import {data} from "./components/projects/projectList"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills /> 
      {/* <Test /> */}
      <Projects />
      {/* <Carousel1 prop={data}/> */}
      {/* <Projects_s_m_l dataObj={data}/> */}
    </div>
  );
}

export default App;
