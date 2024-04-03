import React from 'react'

const PageFour = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[90vh] '>
         <div id="question_options" className="flex items-center justify-center flex-col mb-10 ">
        <div className=" text-xl md:text-3xl font-bold">
          What is your math comfort level ?
        </div>
        <div
          id="feedback"
          className="mt-4 w-3/4 md:w-auto text-sm md:text-lg text-gray-500"
        >
          Choose the highest level you feel confident in - you can always adjust later. 
        </div>
      </div>
      <div id="options">
      <div className='h-40 w-40 rounded-md border-2'></div>
      </div>
    
    </div>
  )
}

export default PageFour