"use client";
import { useState } from "react";
// import { tabsData } from "@/data/tabsData";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState("apu")
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
          <div
            key={index}
            className={`mr-4 px-4 py-2 rounded cursor-pointer ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              console.log("Clicked tab index:", index);
              setActiveTab(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div>{tabsData[activeTab].content}</div>
      <div>
         <p>{data}</p>
         <button onClick={()=> setData("Vai")} >click</button>
      </div>
    </div>
  );
};

export default Tabs;
