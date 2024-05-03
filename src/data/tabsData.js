import AllProject from "@/components/screen/Works/AllProject";
import NextJsProject from "@/components/screen/Works/NextJsProject";
import ReactProject from "@/components/screen/Works/ReactProject";

export const tabsData = [
  {
    title: "All",
    content: <AllProject />,
  },
  {
    title: "Next.js",
    content: <NextJsProject />,
  },
  {
    title: "React",
    content: <ReactProject />,
  },
  {
    title: "JavaScript",
    content: <div>Content of Tab 3</div>,
  },
];
