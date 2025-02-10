import React, { useEffect, useRef, useState } from "react";
import { experienceList } from "../../utils/experience";

interface ExpericenceDetail {
  company: string;
  year: string;
  role: string;
  description: string;
}

const Skills = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [selectedExperienceDetatils, setSelectedExperienceDetatils] = useState<ExpericenceDetail>({ ...experienceList[0] });

  useEffect(() => {
    if (textRef.current) {
      // Remove the animation class if it exists
      textRef.current.classList.remove("slide-in-right");
      
      // Force a reflow to reset the animation
      void textRef.current.offsetWidth;
      
      // Add the animation class to trigger the animation
      textRef.current.classList.add("slide-in-right");
      
    }
  }, [selectedExperienceDetatils]);

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="text-lg font-semibold">Skills</div>
      <div className="flex flex-row flex-wrap items-center gap-4 w-full">
        {experienceList &&
          experienceList.map((experience, index) => (
            <div
              key={index}
              onClick={() => setSelectedExperienceDetatils({ ...experience })}
              className={`${
                selectedExperienceDetatils.company === experience.company
                  ? "shadow-white shadow-sm"
                  : ""
              } bg-secondary text-light-green px-5 py-3 text-xs cursor-pointer`}
            >
              {experience.company}
            </div>
          ))}
      </div>
      <div className="flex flex-col w-full" ref={textRef}>
        <div className="opacity-40">{selectedExperienceDetatils.year}</div>
        <div className="text-light-green text-xl">{selectedExperienceDetatils.role}</div>
        <div className="opacity-40 text-sm font-semibold tracking-widest">
          {selectedExperienceDetatils.company}
        </div>
        <div className="opacity-75 tracking-wide leading-6">
          {selectedExperienceDetatils.description}
        </div>
      </div>
    </div>
  );
};

export default Skills;
