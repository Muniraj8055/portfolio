import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination,Autoplay} from 'swiper'

import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'
//import proj from '../assets/proj.png'


const Project = () => {
  const projects = [
    {
      img: proj1,
      name: "Covid-19 Traker",
      desc:"React app using covid api",
      github_link: "https://github.com/Muniraj8055/Covid19-tracker",
      live_link: "https://trackc-19.netlify.app/",
    },
    {
      img: proj2,
      name: "Facebook Clone",
      desc:'Fullstack app using React and firebase',
      github_link: "https://github.com/Muniraj8055/FacebookClone",
      live_link: "https://facebookcl.netlify.app/",
    },
    {
      img: proj3,
      name: "Connect me(Vedio cl app)",
      desc:'React App using socket.io',
      github_link: "https://github.com/Muniraj8055/Connect_Me",
      live_link: "https://vediocontactme.netlify.app",
    },
    {
      img: proj4,
      name: "Speechly Budget Tracker",
      desc:'React app using react charts and speechly api',
      github_link: "https://github.com/muniraj8055/speechly_budgettracker",
      live_link: "https://voice-budget-tracker.netlify.app/",
    },
    {
      img: proj5,
      name: "Food Recipe App",
      desc:"React app using food recipe api",
      github_link: "https://github.com/Muniraj8055/Recipe_app",
      live_link: "https://makerecipe.netlify.app/",
    },
    {
      img: proj6,
      name: "Weather App",
      desc:"React app using weather api",
      github_link: "https://github.com/Muniraj8055/Weatherapp",
      live_link: "https://weathercheckk.netlify.app/",
    },

  ];
  return (
    <section id="projects" className="py-16 text-white  ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            breakpoints={{
                0:{
                  slidesPerView:1
                },
                520:{
                  slidesPerView:2
                },
                768:{
                  slidesPerView:3
                }
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-1/2 w-full p-3 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-full w-full object-contain" />
                  <h3 className="text-xl ">{project_info.name}</h3>
                  <p className='py-2 text-zinc-400' >{project_info.desc}</p>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      // target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      // target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden px-2">
          <img src={proj} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project
