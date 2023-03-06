
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mysql from "../assets/mysql.png";
import bootstrap from "../assets/boot2.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
   
    {
      id: 10,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-36 sm:py:32">
          <div
      className="bg-gray-900 w-full h-screen experience "
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div className="" data-aos="fade-right">
          <p className="text-4xl text-center font-semibold ">
            SKILLS
          </p>
          {/* <p className="py-6 text-center">These are the technologies I've worked with and used them in my projects.</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-10 sm:px-0" >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="flip-left"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;