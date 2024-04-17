import SubTitle from "@/components/shared/SubTitle";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
  return (
    <div>
      <div className="flex  gap-2">
        <MdOutlineWorkOutline size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Experience" />
      </div>
      <div className="grid grid-cols-2 gap-7">
          <div className="px-5 pb-5 pt-6 border border-borderRe">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nobis sit voluptas voluptate dolor eum veritatis facilis corrupti blanditiis sunt illum est quasi nemo animi quis, cumque quia iusto quo.
          </div>
      </div>
    </div>
  );
};

export default Experience;
