import React from 'react'
import me from '../assets/me.png'
export default function Home() {
  return (
    <div className='mt-[5rem]' >
        
        <div className=' flex justify-around lg:flex-row items-start '  >
<div className='mt-[10rem] font-semibold transform translate-x-0 translate-y-0 motion-safe:animate-pulse rounded w-32 text-3xl text-left    ' id='main_home' >

        <h3 className='text-yellow-400'>HELLO!</h3>
        <p>I AM <span className='text-yellow-400'>ZAHRA WASEEM</span></p>
        <p>A WEB DEVELOPER</p>
</div>

        <div >
            <img id='meimage'  src={me} alt="" className='w-[20rem] h-[30rem]  bg-' />
        </div>

        </div>
    </div>
  )
}
