import React, { useState } from "react";
import {InfoContainer, InfoPage, NavContainer, TabButton} from "./styles"

import AboutInfoTabScreen from "../about-info-tab-screen";
import AttributesInfoTabScreen from "../attributes-info-tab-screen";
import StatsInfoTabScreen from "../stats-info-tab-screen";


export default function InfoTabList({weakness}) {
   
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
              About
            </TabButton>
            <TabButton onClick={changeSecondTab}>
              {showSecondTab ? false : true}
              Attributes
            </TabButton>
            <TabButton onClick={changeThirdTab}>
              {showThirdTab ? false : true}  
              Stats
            </TabButton>
        </NavContainer>
        <InfoContainer>
          {showFirstTab && <AboutInfoTabScreen/>}
          {showSecondTab && <AttributesInfoTabScreen />}
          {showThirdTab && <StatsInfoTabScreen />}
        </InfoContainer>
        <InfoPage>
          <h4>About</h4>
          <AboutInfoTabScreen
            weakness={weakness}
          />
          <h4>Attributes</h4>
          <AttributesInfoTabScreen />
          <h4>Stats</h4>
          <StatsInfoTabScreen />
        </InfoPage>
      </section>
    )

}
