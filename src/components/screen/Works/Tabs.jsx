"use client";
// import { tabsData } from "@/data/tabsData";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      title: "Tab 1",
      content: <div>Content of Tab 1</div>,
    },
    {
      title: "Tab 2",
      content: <div>Content of Tab 2</div>,
    },
    {
      title: "Tab 3",
      content: <div>Content of Tab 3</div>,
    },
  ];
  return (
    <div>
      <div className="flex">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`mr-4 px-4 py-2 rounded ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div>{tabsData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
