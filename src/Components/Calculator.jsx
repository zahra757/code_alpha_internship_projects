// main calculator

import React, { useState } from 'react'

export default function Calculator() {
    const [input , SetInput]= useState('')

    
  return (
    <div className='bg-slate-200 h-screen '>
   {/* Calculator title 
            input screen
            buttons */}
        <h1 className='text-center   text-black text-2xl'>
         Calculator
            </h1>
        <div className='bg-black rounded-xl p-1 h-[27rem] w-[20rem] m-auto mt-12'>


            <p className='text-center mt-4'>
                <input type="text" className='border-2 border-black rounded-lg h-[3rem] w-[17rem] text-center ' value={input} readOnly
                // onChange={(e)=>SetInput(e.target.value)}
                placeholder='enter number'


                 />
            </p>



            {/* buttons */}
<div className='text-center  m-auto mt-7  w-fit  '>

{/* numbers */}
            <button type='button' className='border-2 border-black p-5 m-1 bg-yellow-200 rounded-lg ' value='clear' onClick={()=>SetInput('')}>C</button>
            <button type='button' value='1' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg ' >1</button>
            <button type='button' value='2' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>2</button>
            <button type='button' value='3' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>3</button>
            <br/>
            <button type='button' value='4' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>4</button>
            <button type='button' value='5' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>5</button>
            <button type='button' value='6' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>6</button>
            <button type='button' value='7' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>7</button>
            <br/>
            <button type='button' value='8' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>8</button>
            <button type='button' value='9' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-white rounded-lg'>9</button>
            

            {/* symbols */}
            <button type='button' value='+' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-orange-600 rounded-lg text-white'>+</button>
            <button type='button' value='-' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-orange-600 rounded-lg text-white'>-</button>
            <br/>
            <button type='button' value='*' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-orange-600 rounded-lg text-white'>*</button>
            <button type='button' value='/' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-orange-600 rounded-lg text-white'>/</button>
            <button type='button' value='.' onClick={(e)=>SetInput(input+ e.target.value)} className='border-2 border-black p-5 m-1 bg-orange-600 rounded-lg text-white'>.</button>


            {/* output equal button */}
            <button type='button' value='=' className='border-2 border-black p-5 m-1 bg-white rounded-lg ' onClick={()=>{
                SetInput(eval(input))
            }}>=</button>

</div>

        </div>

    </div>
  )
}


