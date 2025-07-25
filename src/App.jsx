import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import CustomCursor from "./Components/CustomCursor";
import Projects from "./Components/Projects";
import WhatIDo from "./Components/WhatIDo";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Intro />
      <WhatIDo />
      <div id="skill"></div>
      <Skills />
      <div id="project"></div>
      <Projects />
      <div id="aboutme"></div>
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
