"use client";
// import { useState } from "react";
import { tabsData } from "@/data/tabsData";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(3);
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  

  return (
    <div>
      <div className="mb-7.5 flex justify-end">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`px-[18px] font-medium rounded cursor-pointer ${
              activeTab === index ? "text-activeColor" : ""
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
      {/* <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div> */}
    </div>
  );
};

export default Tabs;
