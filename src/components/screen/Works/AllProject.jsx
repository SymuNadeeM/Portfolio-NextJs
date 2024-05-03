import { allProjectData } from "@/data/allProjectData";
import Image from "next/image";
import Link from "next/link";
const AllProject = () => {
  return (
    <div className="px-3.5 grid grid-cols-2 gap-x-5 gap-y-5">
      {allProjectData.map((items) => (
        <div
          key={items.id}
          className="p-5 bg-grayBg border border-borderRe rounded-xl"
        >
          <Link href={"#"} className="rounded-xl mb-4 block overflow-hidden">
            <Image
              src={items.image}
              alt={items.name}
              width={310}
              height={310}
            />
          </Link>
          <span className="text-xs capitalize">{items.title}</span>
          <Link href={"#"}>
            <h5 className="font-medium capitalize">{items.name}</h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllProject;
