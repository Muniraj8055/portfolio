import React from "react";
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
