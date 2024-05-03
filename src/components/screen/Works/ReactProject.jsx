import { allProjectData } from "@/data/allProjectData";
import Link from "next/link";

const ReactProject = () => {
  const reactProjectData = allProjectData.filter(
    (allData) => allData.type === "react"
  );
  return (
    <div>
      {reactProjectData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <Link href={item.liveDemo}>Live</Link>
        </div>
      ))}
    </div>
  );
};

export default ReactProject;
