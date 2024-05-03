import { allProjectData } from "@/data/allProjectData";
import Link from "next/link";
const NextJsProject = () => {
  const nextJsData = allProjectData.filter(
    (project) => project.type === "nextjs"
  );

  return (
    <div>
      {nextJsData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <Link href={item.liveDemo}>Live</Link>
        </div>
      ))}
    </div>
  );
};

export default NextJsProject;
