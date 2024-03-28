import Typewriter from "./Typewriter";
import { motion as m } from "framer-motion";
import { parentVarints } from "../Animate/parentVarients";
import myProfile from "../../assets/Rajesh Passport 1X1.jpg";
import Button2 from "../Buttons/Button2";
import Scoialmedia from "../Utils/Scoialmedia";
import "./home.scss";

const Home = () => {
  return (
    <section id="Home" className="sections container m-4">
      <div id="Name">
        <m.div
          id="greetings"
          className="childElements"
          whileInView={{ backgroundPosition: "left bottom" }}
        >
          <m.h1 variants={parentVarints} initial="hidden" whileInView="show">
            Hi There!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </m.h1>
        </m.div>
        <m.div
          id="name"
          className="childElements"
          whileInView={{ backgroundPosition: "left bottom" }}
        >
          <m.h1 variants={parentVarints} initial="hidden" whileInView="show">
            I am Rajesh Varma,
          </m.h1>
        </m.div>
        <m.div
          id="designation"
          className="childElements"
          whileInView={{ backgroundPosition: "left bottom" }}
        >
          <m.h2
            variants={parentVarints}
            initial="hidden"
            whileInView="show"
            style={{ color: "red" }}
          >
            <Typewriter />
          </m.h2>
        </m.div>
        <div id="social_media_container">
          <Scoialmedia />
        </div>
        <div className="buttonsContainer">
          <a
            href="https://drive.google.com/file/d/1hUNlHDgRVXF4_RZDdQwGpHHsbFn128iW/view?usp=sharing"
            target="_blank"
            download="Rajesh_varma_P Resume"
          >
            <Button2
              text={"Resume"}
              path={
                "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
              }
            />
          </a>
          <Button2
            text={"About Me"}
            path={
              "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            }
          />
        </div>
      </div>
      <div id="myMainImageContainer">
        <m.img
          initial={{ scale: 0.5, y: "50%", x: "30%" }}
          transition={{ duration: 1, ease: "linear" }}
          animate={{ scale: 1, y: "0%", x: "0%" }}
          src={myProfile}
          alt="My Profile"
          id="myMainImage"
          className="content myMainImage"
        />
      </div>
    </section>
  );
};

export default Home;
