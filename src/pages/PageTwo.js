import React, { useState } from 'react'
import ContinueButton from '../components/ContinueButton';
import OptionButton from '../components/optionbutton/OptionButton';
import { SecondOptionData } from '../utils/OptionData';

const PageTwo = () => {
    const [optionSelected, SetOptionSelected] = useState(false)
    return (
      <div className="flex items-center justify-center h-[90vh] flex-col md:mt-28  md:space-y-2 ">
        <div id="question" className="flex items-center justify-center flex-col mb-10 ">
          <div className=" text-xl md:text-3xl font-bold">
            Which are you most interested in ?
          </div>
          <div
            id="feedback"
            className="mt-4 w-3/4 md:w-auto text-sm md:text-lg  text-gray-500"
          >
            choose just one. This will help us get you started (but won't limit your exprerience).
          </div>
        </div>
      
          {SecondOptionData.map((option) => (
            <OptionButton key={option.id} option={option} optionSelected={optionSelected} SetOptionSelected={SetOptionSelected} />
          ))}
  
          <ContinueButton active={optionSelected}/>
          </div>
    );
}

export default PageTwo