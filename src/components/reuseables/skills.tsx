import React, { useEffect, useRef, useState } from "react";
import { skillList } from "../../utils/skills";

interface SkillDetail {
  name: string;
  percentage: string;
}

const Skills = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [selectedskillDetatils, setSelectedSkillDetatils] = useState<SkillDetail>({ ...skillList[0] });

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="text-lg font-semibold">SKILLS</div>
      <div className="flex flex-row flex-wrap items-center gap-4 w-full">
        {skillList &&
          skillList.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkillDetatils({ ...skill })}
              className={`bg-secondary text-light-green px-5 py-3 text-xs cursor-pointer`}
            >
              {skill.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
