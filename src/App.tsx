import React from "react";
import "./global.scss";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Technology from "./components/Technologies/Technology";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { CursorWrapper } from "./components/CursorWrapper/CursorWrapper";

const App = () => {
  return (
    <div className="app">
      <CursorWrapper />
      <Navbar />
      <About />
      <Project />
      <Technology />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
