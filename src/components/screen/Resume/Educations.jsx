import SubTitle from "@/components/shared/SubTitle";
import { education } from "@/data/education";
import { MdOutlineCastForEducation } from "react-icons/md";

const Educations = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <MdOutlineCastForEducation size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Education" />
      </div>
      <div className="grid md:grid-cols-2 gap-9">
        {education.map((education, index) => (
          <div
            key={index}
            className="px-5 pb-5 pt-6 border border-borderRe rounded-[12px] space-y-2"
          >
            <span>{education.year}</span>
            <h4 className="text-lg text-white font-medium leading-6">
              {education.title}
            </h4>
            <p>{education.institute}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
