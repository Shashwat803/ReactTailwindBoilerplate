import React, { useState } from 'react'

const ProgressBar = () => {
    const  [progress, setProgress] = useState(40)
    const handleProgress = ()=>{
        if(progress < 100 && progress >= 0){
        setProgress(progress + 20)
        }
    }
  return (
   <div className='mt-10'>
     <div className='flex  justify-center items-center w-full'>
        <div className='w-3/4 h-2  rounded-md border bg-slate-200 '>
            <div style={{width:`${progress}%`}} className='h-full bg-green-700'></div>
        </div>
    </div>
   </div>
  )
}

export default ProgressBar