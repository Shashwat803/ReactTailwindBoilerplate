import React from 'react'
import video from '../assets/pulley-blob.mp4'
import ContinueButton from '../components/ContinueButton'
const PageThird = () => {
  return (
<div className='flex flex-col items-center justify-start h-[90vh]'>
<div className=' flex flex-col md:flex-row items-center justify-center h-[70vh]'>
    <div id="video" className=' w-1/2 md:h-2/3'>
    <video className='w-full h-full' >
        <source src={video} type='video/mp4' />
    </video>
    </div>
    <div id="info" className=' mt-4 md:mt-0 w-[85%] md:w-3/5 flex items-center justify-center flex-col md:block'>
        <div id="head" className='  text-xl md:text-3xl font-bold'>You're in the right place</div>
        <div id="paragraph" className='mt-4 w-full  md:w-2/3 text-sm md:text-md'>Brilliant gets you hands-on to help improve your professional
        skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</div>
    </div>
    </div>
  <ContinueButton/>
</div>
  )
}

export default PageThird