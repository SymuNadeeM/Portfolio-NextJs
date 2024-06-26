import SubTitle from "@/components/shared/SubTitle";
import { experience } from "@/data/experience";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
  return (
    <div>
      <div className="flex gap-2 mt-10">
        <MdOutlineWorkOutline size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Experience" />
      </div>
      <div className="grid md:grid-cols-2 gap-9">
        {experience.map((experience, index) => (
          <div
            key={index}
            className="px-5 pb-5 pt-6 border border-borderRe rounded-[12px] space-y-2"
          >
            <span>{experience.date}</span>
            <h4 className="text-lg text-white font-medium leading-6">
              {experience.title}
            </h4>
            <p>{experience.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
