import SubTitle from "@/components/shared/SubTitle";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Knowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <GiGiftOfKnowledge size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Knowledges" />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">Node.js</div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">MongoDB</div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">Express.js</div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">Redux</div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">GitHub</div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">
          Communication
        </div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">
          Time Management
        </div>
        <div className="bg-knowColor py-[5px] px-5 rounded-lg">Flexibility</div>
      </div>
    </div>
  );
};

export default Knowledge;
