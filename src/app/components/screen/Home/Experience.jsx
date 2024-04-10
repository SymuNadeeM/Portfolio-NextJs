import { aboutData } from "@/app/data/aboutPage";

const Experience = () => {
  return (
    <div className="mt-[30px] bg-[#f3f9ff] dark:bg-blackbg p-5">
      <h3 className="text-lg md:text-xl dark:text-[#fff] font-abc font-medium capitalize">
        EXPERIENCE
      </h3>
      <div className="flex items-center">
        <div className="bg-green2 w-[45px] h-[1px] p-[1px]"></div>
        <div className="bg-green2 rounded-full w-[6px] h-[6px] p-[2px]"></div>
      </div>
      <div className="mt-[20px] grid grid-cols-2 gap-3 ">
        {aboutData.experiences.map(experience => (
          <div key={experience.id} className="space-y-2 dark:bg-tran bg-[#fff] border p-4 border-[#f9fafc]">
            <div className="flex justify-between text-center">
              <h4 className="text-[#FF972D] text-[16px] font-semibold">
                {experience.year}
              </h4>
              <p className="font-medium text-text2">-{experience.company}</p>
            </div>
            <h3 className="text-[19px] text-text2 font-abc">{experience.title}</h3>
            <p className="font-thin text-text1">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;