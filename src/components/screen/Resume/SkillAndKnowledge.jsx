"use client";

import SubTitle from "@/components/shared/SubTitle";
import skillsData from "@/data/skillData";
import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";

const SkillAndKnowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <GiSkills size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Working Skills" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-3">
          {skillsData.slice(0,4).map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h4>{skill.name}</h4>
                <h5>{skill.percent}%</h5>
              </div>
              <Line
                percent={skill.percent}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="#41B06E"
              />
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {skillsData.slice(4,7).map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h4>{skill.name}</h4>
                <h5>{skill.percent}%</h5>
              </div>
              <Line
                percent={skill.percent}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="#41B06E"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAndKnowledge;
