import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div>

<div className='mb-10 mt-[2rem]'>
      <h3 className=' underline text-center mt-10 font-bold text-3xl '  >CONTACT ME</h3>
<span className='opacity-25 flex justify-center flex-wrap text-center font-bold text-5xl'>CONTACT ME</span>
      </div>


<div className='flex flex-wrap justify-evenly text-center '>

<div className=''>
<FaLocationDot className='text-5xl m-auto text-yellow-400' />
  <p>ADDRESS:</p>
  <p>PAKISTAN</p>
</div>

<div>
<IoIosContact className='text-5xl m-auto text-yellow-400' />
  <p>CONTACT NUMBER:</p>
  <p>000-0000-00</p>
</div>

<div>
<MdAlternateEmail className='text-5xl m-auto text-yellow-400' />
  <p>EMAIL-ADDRESS:</p>
  <p>zahrawaseem757@gmail.com</p>
</div>




</div>


    </div>
  )
}
