import React from 'react'
import algebra from '../assets/Pre-Algebra_puzzle.png'
const PageSeven = () => {
  return (
    <div className='flex justify-center items-center h-[90vh] flex-col' >
        <div id="heading" className=' text-center  font-bold w-[90%] text-xl md:text-4xl'>
            Learning paths based on your answers
        </div>
        <div className='text-center mt-8 text-gray-500'>Choose one to get started. You can switch anytime.</div>
      <div className='flex justify-center flex-col md:flex-row items-center md:space-x-2 mt-20 md:mt-10 h-[30%] w-[80%] md:w-[50%] '>
      <div className=' p-2 flex items-center md:w-1/2 h-full border-2 rounded-md relative '>  
      <div className="bg-gray-200 rounded-full absolute top-[-10px] left-28">
            <span className=" bg-yellow-500 text-black rounded-full text-xs py-1 p-2 font-semibold">
              Most Popular
            </span>
            </div>
      <div className='text-sm'><strong>Foundational Math</strong> Build your foundational skills in algebra, geometry, and probability.</div>
       <img src={algebra} className='w-28 h-28' alt="" />    
        </div>
        <div className='mt-4 md:mt-0 p-2 flex items-center md:w-1/2 h-full border-2 rounded-md '> 
        <div className='text-sm'><strong>MatheMatical Thinking</strong> Build your foundational skills in algebra, geometry, and probability.</div>
       <img src={algebra} className='w-28 h-28' alt="" />
        </div>
      </div>
    </div>
  )
}

export default PageSeven