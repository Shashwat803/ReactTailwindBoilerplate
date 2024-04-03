import React, { useState } from 'react'
import { FourthPageData } from '../utils/OptionData'
import ContinueButton from '../components/ContinueButton'
import { useMultiStep } from '../feature/MultiStepContext'

const OptionButton = ({option, SetOptionSelected})=>{
    return(
        <button onClick={()=> SetOptionSelected(true)} className='h-40 w-48 rounded-md border-2 ml-2 flex items-center justify-center flex-col focus:ring-2 ring-yellow-400 hover:shadow-lg'>
         <img src={option.imagePath} className='w-26 h-10' alt="" />
        <div className='text-sm mt-3'>{option.title}</div>
        <div className='text-sm mt-2 text-gray-400'>{option.level}</div>
     </button>
    )
}

const PageFour = () => {
  const {nextPage} = useMultiStep()
  const [optionSelected, SetOptionSelected] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center h-screen md:h-[90vh] '>
         <div id="question_options" className=" mt-20 md:mt-0 flex items-center justify-center flex-col mb-10 ">
        <div className="  text-xl md:text-3xl font-bold">
          What is your math comfort level ?
        </div>
        <div
          id="feedback"
          className="mt-4 w-3/4 md:w-auto text-sm md:text-lg text-gray-500"
        >
          Choose the highest level you feel confident in - you can always adjust later. 
        </div>
      </div>
      <div id="options" className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 items-center md:mb-10'>
      {FourthPageData.map((option)=>(
       <OptionButton option={option} key={option.id} SetOptionSelected={SetOptionSelected} />
      ))}
      </div>
      <ContinueButton nextPage={nextPage} active={optionSelected} />
    </div>
  )
}

export default PageFour