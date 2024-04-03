import React from 'react'
import ContinueButton from '../components/ContinueButton'
import { useMultiStep } from '../feature/MultiStepContext'
const PageThird = () => {
  const {nextPage} = useMultiStep()
  return (
<div className='flex flex-col items-center justify-start h-[100%]'>
<div className=' flex flex-col md:flex-row items-center justify-center h-[60vh]'>
    <div id="video" className=' w-1/2 md:h-2/3'>
    <video src='https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4' autoPlay loop className='w-full h-full' >
    </video>
    </div>
    <div id="info" className=' mt-8 md:mt-0 w-[85%] md:w-3/5 flex items-center justify-center flex-col md:block'>
        <div id="head" className='  text-xl md:text-3xl font-bold'>You're in the right place</div>
        <div id="paragraph" className='mt-4 w-full  md:w-2/3 text-sm md:text-md text-center md:text-left '>Brilliant gets you hands-on to help improve your professional
        skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</div>
    </div>
    </div>
  <ContinueButton nextPage={nextPage} active={true} />
</div>
  )
}

export default PageThird