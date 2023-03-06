import React, { useEffect } from "react";
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from 'aos'
import "aos/dist/aos.css"


const App = () => {

  useEffect(()=>{
    AOS.init( { offset: 80 , duration:1500})
    AOS.refresh()
  },[])

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
