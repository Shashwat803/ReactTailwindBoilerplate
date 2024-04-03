import React, { useState } from "react";
import {FirstPageData} from "../utils/OptionData";
import ContinueButton from "../components/ContinueButton";
import OptionButton from "../components/optionbutton/OptionButton";
import { useMultiStep } from "../feature/MultiStepContext";


const PageOne = () => {
  const [optionSelected, SetOptionSelected] = useState(false)
  const {nextPage} = useMultiStep()
  return (
    <div className="flex items-center justify-center h-[100%] flex-col md:space-y-1 ">
      <div id="question" className="flex  items-center justify-center flex-col mb-8 ">
        <div className=" text-xl md:text-3xl font-semibold">
          Which describes you best ?
        </div>
        <div
          id="feedback"
          className="mt-4 w-3/4 md:w-auto text-sm md:text-lg text-center text-gray-500"
        >
          This will help us personalize your exprerience
        </div>
      </div>
    
        {FirstPageData.map((option) => (
          <OptionButton key={option.id} option={option}  SetOptionSelected={SetOptionSelected} />
        ))}

        <ContinueButton nextPage={nextPage} active={optionSelected}/>
        </div>
  );
};

export default PageOne;
