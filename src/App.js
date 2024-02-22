import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills /> 
      {/* <Test /> */}
    </div>
  );
}

export default App;
