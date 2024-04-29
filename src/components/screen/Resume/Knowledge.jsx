import SubTitle from "@/components/shared/SubTitle";
import { knowledgeItems } from "@/data/knowledgeItems";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Knowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <GiGiftOfKnowledge size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Knowledges" />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {knowledgeItems.map((item, index) => (
          <div key={index} className="bg-knowColor py-[5px] px-5 rounded-lg">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
