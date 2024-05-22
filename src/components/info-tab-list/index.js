import React, { useState } from "react";

const FirstTab = () => {
    return (
      <div className="FirstTab">
        <p>First Tab!! Hurray!!</p>
        {/* First tab content will go here */}
      </div>
    );
};

const SecondTab = () => {
    return (
      <div className="SecondTab">
        <p>Second Tab!! Hurray!!</p>
        {/* Second  tab content will go here */}
      </div>
    );
  };

export default function InfoTabList() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
      setActiveTab("tab1");
    };
  
    const handleTab2 = () => {
      setActiveTab("tab2");
    };
  
    return (
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Tab 1
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Tab 2
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
        </div>
      </div>
    );
}
