import React, { useState } from "react";
import {NavContainer, TabButton} from "./styles"

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
      <section>
        <NavContainer>
            <TabButton onClick={changeFirstTab }>
              {showFirstTab ? true : false}
              Sobre
            </TabButton>
            <TabButton onClick={changeSecondTab}>
              {showSecondTab ? false : true}
              Versões
            </TabButton>
            <TabButton onClick={changeThirdTab}>
              {showThirdTab ? false : true}  
              Estatísticas
            </TabButton>
        </NavContainer>
        <div>
          {showFirstTab && <AboutInfoTabScreen/>}
          {showSecondTab && <VersionsInfoTabScreen />}
          {showThirdTab && <StatsInfoTabScreen />}
        </div>
      </section>
    )

}
