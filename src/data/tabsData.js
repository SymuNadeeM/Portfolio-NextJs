import AllProject from "@/components/screen/Works/AllProject";
import JavascriptProject from "@/components/screen/Works/JavascriptProject";
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
    content: <JavascriptProject />,
  },
];
