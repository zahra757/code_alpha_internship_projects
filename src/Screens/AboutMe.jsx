import React from 'react'
import me from '../assets/me.png'
export default function AboutMe() {
  return (
    <div >





<div className='flex items-center justify-around ml-8 ' id='aboutme' >
  
  <div>

  <img id='meimage'  src={me} alt="" className='w-[20rem] h-[30rem]  bg-' />
  </div>

< div className='text-left' id='aboutpara'>
    {/* <section id="ABOUTME"> */}
    

    <h3 className='about-me underline text-left font-bold text-3xl ' id='aboutpara' >ABOUT ME</h3>
    <span className='opacity-25  font-bold text-5xl -ml-[2rem]'>ABOUT ME</span>
    <p className='text-left max-w-[25rem] mt-10' id='aboutpara'>I am Zahra a passionate front-end developer with a strong focus on building responsive, user-friendly web applications. I have experience working with modern JavaScript frameworks like React, along with a deep understanding of HTML, CSS, and JavaScript. I enjoy creating visually appealing and interactive user interfaces while ensuring optimal performance and seamless user experiences across all devices.</p>
    

    <div className='mt-4'>

    <p  className='font-extrabold'>NAME: ZAHRA </p>
    <p className='font-extrabold'>EMAIL: zahrawaseem757@gmail.com</p>
    </div>

      
    {/* </section> */}

        </div>

</div>

        
        
        </div>
  )
}
