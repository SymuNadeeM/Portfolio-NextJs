import { allProjectData } from "@/data/allProjectData";
import Image from "next/image";
import Link from "next/link";
const AllProject = () => {
  const halfLength = Math.ceil(allProjectData.length / 2);
  return (
    <div className="px-3.5 flex gap-5">
      <div className="left-side flex flex-col gap-5">
        {allProjectData.slice(0,halfLength).map((items) => (
          <div
            key={items.id}
            className="p-5 bg-grayBg border border-borderRe rounded-xl w-full h-fit"
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
      <div className="right-side flex flex-col gap-5">
        {allProjectData.slice(halfLength).map((items) => (
          <div
            key={items.id}
            className="p-5 bg-grayBg border border-borderRe rounded-xl w-full h-fit"
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
    </div>
  );
};

export default AllProject;
