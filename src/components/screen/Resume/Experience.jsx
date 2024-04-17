import SubTitle from "@/components/shared/SubTitle";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
  return (
    <div>
      <div className="flex  gap-2">
        <MdOutlineWorkOutline size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Experience" />
      </div>
    </div>
  );
};

export default Experience;
