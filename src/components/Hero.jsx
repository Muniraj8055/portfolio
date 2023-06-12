
import React from 'react'
import hero from '../assets/muni.jpg'



const Hero = () => {


  const social_media = [
    {
      logo:"logo-instagram",
      link:"https://www.instagram.com/muniraj99.m/"
    },
    {
      logo:"logo-facebook",
      link:"https://www.facebook.com/profile.php?id=100051206439037"
    },
    {
      logo:"logo-linkedin",
      link:"https://www.linkedin.com/in/muniraj-m-014370193"
    },
    {
      logo:"logo-twitter",
      link:"https://twitter.com/muni8055?t=2bWXtodRf9HFZnJTjHQd8Q&s=09"
    },

  ] 



  return (
    <section 
       id='home' 
       className='min-h-screen flex py-10 md:flex-row-reverse flex-col items-center'
       >

      <div className='flex-1 flex items-center md:justify-start justify-center h-full' data-aos="zoom-in"  >
        <img className='h-3/5 w-3/5 scale-90 hover:scale-95 ease-in duration-500 object-cover rounded-full' src={hero} alt='' />
      </div>

      <div className='flex-1' data-aos="zoom-in">
        <div className=' text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello! <br />
            </span>
            I'm <span>Muniraj</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500'>Fullstack Developer</h4>
          
        </div>
        <div className='mt-8 text-3xl flex items-center md:justify-center justify-center gap-5'>
          {
            social_media?.map( (social_info,i)=>(
            <div key={i} className='text-gray-600 hover:text-white cursor-pointer'>
              <a href={social_info.link}><ion-icon name={social_info.logo}></ion-icon></a>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
