import React, { useState } from "react";
import {optionData} from "../utils/OptionData";
import ContinueButton from "../components/ContinueButton";
import OptionButton from "../components/optionbutton/OptionButton";

const PageOne = () => {
  const [optionSelected, SetOptionSelected] = useState(false)
  return (
    <div className="flex items-center justify-center h-screen flex-col md:mt-28  md:space-y-2 ">
      <div id="question" className="flex items-center justify-center flex-col mb-10 ">
        <div className=" text-xl md:text-3xl font-bold">
          Which describes you best ?
        </div>
        <div
          id="feedback"
          className="mt-4 w-3/4 md:w-auto text-sm md:text-lg text-gray-500"
        >
          This will help us personalize your exprerience
        </div>
      </div>
    
        {optionData.map((option) => (
          <OptionButton key={option.id} option={option}  SetOptionSelected={SetOptionSelected} />
        ))}

        <ContinueButton active={optionSelected}/>
        </div>
  );
};

export default PageOne;
