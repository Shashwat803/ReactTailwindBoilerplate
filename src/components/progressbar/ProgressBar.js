import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useMultiStep } from '../../feature/MultiStepContext';

const ProgressBar = () => {
  const { currentPage, prevPage } = useMultiStep();
    const progressMap = [20, 40, 60, 80, 100];
  
  return (
   <div className='my-10'>
     <div className='flex  space-x-2 justify-center items-center w-full'>
   {  currentPage >0 && <IoIosArrowBack className='cursor-pointer' onClick={prevPage} size={20} />}
        <div className='w-3/4 h-1.5  rounded-md border bg-slate-200 '>
            <div style={{width:`${progressMap[currentPage]}%`}} className='h-full bg-green-700 rounded-md'></div>
        </div>
    </div>
   </div>
  )
}

export default ProgressBar