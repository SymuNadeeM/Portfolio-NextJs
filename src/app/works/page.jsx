"use client";
import TitleText from "@/components/shared/TitleText";
import { tabsData } from "@/data/tabsData";
import { useState } from "react";

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <TitleText title="Portfolio" />
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
    </section>
  );
};

export default WorkPage;
