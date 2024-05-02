import AllProject from "@/components/screen/Works/AllProject";
import NextJsProject from "@/components/screen/Works/NextJsProject";

export const tabsData = [
  {
    title: "All",
    content: (
      <div>
        <AllProject />
      </div>
    ),
  },
  {
    title: "Next.js",
    content: <NextJsProject />,
  },
  {
    title: "React",
    content: <div>Content of Tab 3</div>,
  },
  {
    title: "JavaScript",
    content: <div>Content of Tab 3</div>,
  },
];
