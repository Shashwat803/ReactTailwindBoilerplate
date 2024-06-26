import React from 'react'



const ContinueButton = ({nextPage,active, SetOptionSelected}) => {



  return (
    <div className='pt-5 pb-2'>
        <button disabled={!active} onClick={nextPage}  className={`${active?'border py-2 px-8 rounded-md bg-black text-white hover:bg-slate-700':'border py-2 px-8 rounded-md bg-gray-300 text-white'}`} >Continue</button>
    </div>
  )
}

export default ContinueButton

