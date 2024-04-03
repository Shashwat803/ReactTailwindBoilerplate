import React from "react";
import { FaStar } from "react-icons/fa";
import ContinueButton from "../components/ContinueButton";
import { useMultiStep } from "../feature/MultiStepContext";
const PageFive = () => {
  const {nextPage} = useMultiStep()
  return (
    <div className="flex justify-center items-center flex-col h-[80vh]">
    <div className="flex justify-center flex-col md:flex-row items-center h-full ">
      <div className="flex justify-center w-[50%] md:w-[40%]  ">
      <div className=" w-full md:w-[55%] ">
        <video src="https://brilliant.org/site_media/version-0/images/nux-animations/cheerleader-blorb.mp4" autoPlay loop className="w-full h-full" ></video>
      </div>
      </div>
      <div className=" mt-4 flex justify-center items-center flex-col md:block w-[90%] md:w-1/2">
        <div className="font-bold  text-xl md:text-3xl">You're on your way !</div>
        <div className="flex items-center mt-5 md:mt-10 gap-x-1">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar color="orange" key={i} />
            ))}
        </div>
        <div className="mt-6 italic w-[90%] md:w-[95%] m">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations."
        </div>
        <div className="mt-4">- Jacob S.</div>
      </div>
    </div>
      <ContinueButton nextPage={nextPage}/>
      </div>
  );
};

export default PageFive;
