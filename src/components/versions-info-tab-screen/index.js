import React, { useState } from 'react'

import NormalVersionTabScreen from './normal-version-tab-screen'
import ShinyVersionTabScreen from './shiny-version-tab-screen'

import { NavVersionsContainer } from './styles'


export default function VersionsInfoTabScreen() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1")
  }

  const handleTab2 = () => {
    setActiveTab("tab2")
  }

  return (
      <NavVersionsContainer className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            normal
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            shiny
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" ? <NormalVersionTabScreen /> : <ShinyVersionTabScreen />}
        </div>
      </NavVersionsContainer>
  )
}
