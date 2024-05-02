import { allProjectData } from "@/data/allProjectData";
import Link from "next/link";
const AllProject = () => {
  return (
    <div className="grid grid-cols-2">
      {allProjectData.map((items)=>(
        <div key={items.id} className="border gap-3">
          <h1>{items.title}</h1>
          <Link href={items.liveDemo}>Live</Link>
        </div>
      ))}
    </div>
  );
};

export default AllProject;