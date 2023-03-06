import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Result= () =>{
  return(
    <p>Your message has been successfully sent. I will contact you soon.</p>
  )
}

const Contact = () => {

  const form = useRef();
  const [result,showResult] = useState(false)

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_a160j9c', 'template_tcbksxf', form.current, 'RRui9-cMjVsfM1wsG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    showResult(true)
};

  const contact_info = [
    { 
      logo:'mail',
      text:'muniraj99.m@gmail.com',
    },
    { 
      logo:'logo-whatsapp',
      text:'7338252714',
    },
    { 
      logo:'location',
      text:'Bengaluru , Karnataka',
    },
  ]

  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
       <div data-aos="fade-right">
        <h3 className='text-4xl font-semibold'>
            Contact <span className='text-cyan-600'>Me</span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
       </div>
        <div className='mt-10 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto' data-aos="fade-up">
          <form className='flex flex-col flex-1 gap-5' ref={form} onSubmit={sendEmail} >
            <input type="text" placeholder='Your Name' name='user_name' required/>
            <input type='email' placeholder='Your Email Adress' name='user_email' required />
            <textarea placeholder='Your Message' rows={10} name="message" required></textarea>
            <button className='btn-primary w-fit' value='Send'>Send Message</button>
            <p className='text-green-600 text-justify mt-0'>{result ? <Result/> : null }</p>
          </form>
          <div className='flex flex-col gap-7'>
              {
                contact_info.map((contact,i)=>(
                    <div className='flex flex-wrap gap-4 w-fit items-center'>
                      <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center
                      text-white bg-cyan-600 rounded-full'>
                        <ion-icon name={contact.logo}></ion-icon>
                      </div>
                      <p className='text-base'>{contact.text}</p>
                    </div>
                ))
              }
             
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact






