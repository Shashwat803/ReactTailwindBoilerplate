import React from 'react'



const ContinueButton = ({nextPage,active, setActive}) => {
 


  return (
    <div className='pt-5 pb-2'>
        <button onClick={nextPage}  className={'border py-2 px-8 rounded-md bg-black text-white hover:bg-slate-700'} >Continue</button>
    </div>
  )
}

export default ContinueButton

