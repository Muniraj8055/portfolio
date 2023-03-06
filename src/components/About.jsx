import React from 'react'
import aboutImg from "../assets/heroImage.png"
import doc from "../assets/resume.pdf"



const About = () => {
  return (
    <section id="about" className='py-10 text-white'>
        <div className='text-center mt-8'data-aos="fade-up">
          <h3 className='text-4xl font-semibold'>
            About <span className='text-cyan-600'>Me</span>
          </h3>
          <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
          <div className='flex md:flex-row-reverse flex-col-reverse items-center
                md:gap-9  gap-12 px-10 max-w-6xl mx-auto'>
             <div className='p-2'>
                <div className='text-gray-300 my-3' data-aos="fade-left">
                  <p className='text-justify leading-7 text-l'>
                  I am a Full Stack Developer with a focus on MERN Stack development. Adept at utilizing MongoDB, 
                  Express.js, React.js, and Node.js to build fast, efficient, and scalable web applications. 
                  Strong background in HTML, CSS, and JavaScript, with an eye for detail and user experience. 
                  Proficient in utilizing Git for version control.  Committed to writing clean, efficient, and 
                  well-documented code and always striving to improve the user experience. A quick learner and 
                  problem solver, with a strong desire to stay up-to-date with industry developments and advancements.
                  </p>
                </div>
                <br />
              <br />
              <a href={doc} download>
                <button className="btn-primary">Download CV</button>
              </a>
             </div>
             <div className='flex-1 flex justify-center items-center'>
              <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg' data-aos="fade-right">
                <img  src={aboutImg} alt=''  className='w-full object-cover bg-cyan-600 rounded-xl' />
              </div>
             </div>
          </div>
        </div>
    </section>
  )
}

export default About
