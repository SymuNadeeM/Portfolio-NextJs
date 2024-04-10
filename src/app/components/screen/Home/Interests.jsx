import { aboutData } from "@/app/data/aboutPage";

const Interests = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-4 mb-7.5">
        <h3 className="text-2xl text-white font-medium">My Interests</h3>
        <div className="w-[80px] h-[1.8px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
      </div>
      <div className="flex justify-between items-center">
        {aboutData.interests.map((interest, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <interest.icon size={20} className="text-white" />
            <p className="font-medium">{interest.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
