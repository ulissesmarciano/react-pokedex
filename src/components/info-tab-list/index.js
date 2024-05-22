import React, { useState } from "react";
import AboutInfoTabScreen from "../about-info-tab-screen";
import VersionsInfoTabScreen from "../versions-info-tab-screen";
import StatsInfoTabScreen from "../stats-info-tab-screen";


export default function InfoTabList() {
   
    const [showFirstTab, setShowFirstTab] = useState(true)
    const [showSecondTab, setShowSecondTab] = useState(false)
    const [showThirdTab, setShowThirdTab] = useState(false)
    
    const changeFirstTab = () => {
        setShowFirstTab(true)
        setShowSecondTab(false)
        setShowThirdTab(false)
    }

    const changeSecondTab = () => {
        setShowSecondTab(true)
        setShowFirstTab(false)
        setShowThirdTab(false)
    }

    const changeThirdTab = () => {
        setShowThirdTab(true)
        setShowSecondTab(false)
        setShowFirstTab(false)
    }

    return (
      <div>
        <nav>

          <button onClick={changeFirstTab}>
            {showFirstTab ? true : false}
            First Tab
          </button>
          <button onClick={changeSecondTab}>
            {showSecondTab ? false : true}
            Second Tab
          </button>
          <button onClick={changeThirdTab}>
            {showThirdTab ? false : true}  
            Third Tab
          </button>
        </nav>
        <div>
          {showFirstTab && <AboutInfoTabScreen/>}
          {showSecondTab && <VersionsInfoTabScreen />}
          {showThirdTab && <StatsInfoTabScreen />}
        </div>
      </div>
    )

}
