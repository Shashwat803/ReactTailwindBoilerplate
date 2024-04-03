import React from 'react'

const OptionButton = ({ option,  SetOptionSelected }) => {
  return (
    <div id="options" className="  w-3/4 md:w-[570px]">
      <button onClick={()=> SetOptionSelected(true)} className=" flex items-center border mt-2 rounded-md w-full p-4 focus:ring-1 ring-yellow-400 hover:shadow-lg ">
        <img src={option.imagePath} className=" w-7 h-7 " alt="" />
        <div className=" ml-4 float-left text-sm md:text-md">{option.option}</div>
      </button>
      </div>
  )
}

export default OptionButton