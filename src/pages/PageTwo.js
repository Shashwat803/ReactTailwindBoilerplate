import React, { useState } from 'react'
import ContinueButton from '../components/ContinueButton';
import OptionButton from '../components/optionbutton/OptionButton';
import { SecondPageData } from '../utils/OptionData';
import { useMultiStep } from '../feature/MultiStepContext';

const PageTwo = () => {
  const {nextPage} = useMultiStep()
    const [optionSelected, SetOptionSelected] = useState(false)
    return (
      <div className="flex items-center justify-center h-[100%] flex-col   md:space-y-2 ">
        <div id="question" className="flex items-center justify-center flex-col mb-10 ">
          <div className=" w-[60%] text-center md:w-auto text-xl md:text-3xl font-bold">
            Which are you most interested in ?
          </div>
          <div
            id="feedback"
            className="mt-4 w-3/4 md:w-auto text-sm md:text-lg  text-gray-500"
          >
            choose just one. This will help us get you started (but won't limit your exprerience).
          </div>
        </div>
      
          {SecondPageData.map((option) => (
            <OptionButton key={option.id} option={option} optionSelected={optionSelected} SetOptionSelected={SetOptionSelected} />
          ))}
  
          <ContinueButton nextPage={nextPage} active={optionSelected}/>
          </div>
    );
}

export default PageTwo