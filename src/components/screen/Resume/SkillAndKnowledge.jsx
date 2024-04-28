"use client";

import SubTitle from "@/components/shared/SubTitle";
// import { SiHyperskill } from "react-icons/si";
import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";

const SkillAndKnowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        {/* <SiHyperskill size={32} className="text-[#dd2476]" /> */}
        <GiSkills size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Working Skills" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-2">
          <div>
            <div className="flex items-center justify-between">
              <h4>css</h4>
              <h5>80%</h5>
            </div>
            <Line
              percent={80}
              strokeWidth={1}
              trailWidth={1}
              strokeColor="#41B06E"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h4>html</h4>
              <h5>90%</h5>
            </div>
            <Line
              percent={90}
              strokeWidth={1}
              trailWidth={1}
              strokeColor="#41B06E"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndKnowledge;
