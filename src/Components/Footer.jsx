import React from 'react'
import me from '../assets/me.png'
export default function Footer() {
  return (
    <div>


<div className='mt-[5rem]  ' >
        
        <div className='flex justify-around flex-wrap lg:flex-row '  >
        <div >
            <img id='meimage'  src={me} alt="" className='w-[20rem] h-[30rem]  ' />
        </div>


        <div className="mt-[2rem] font-semibold bg-slate-200 h-auto max-w-lg mb-11 p-4 mx-auto">
  <input
    type="text"
    className="w-full sm:w-[27rem] p-2 mb-6"
    placeholder="Your Name"
  />
  <input
    type="email"
    className="w-full sm:w-[27rem] p-2 mb-6"
    placeholder="Your Email"
  />
  <input
    type="text"
    className="w-full sm:w-[27rem] p-2 mb-6"
    placeholder="Subject"
  />
  <textarea
    className="w-full sm:w-[27rem] h-[10rem] p-2"
    placeholder="Message"
  />
<div className='bg-yellow-400 w-fit p-3 mt-3 rounded-md text-black'>

<button type='submit'>Send Message</button>
</div>
</div>

        </div>




        
    </div>
    </div>
  )
}
