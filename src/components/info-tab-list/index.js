import React, { useState } from "react";
import {InfoContainer, InfoPage, NavContainer, TabButton} from "./styles"

import AboutInfoTabScreen from "../about-info-tab-screen";
import AttributesInfoTabScreen from "../attributes-info-tab-screen";
import StatsInfoTabScreen from "../stats-info-tab-screen";


export default function InfoTabList({weakness, height, weight, abilities, malePercentage, femalePercentage, eggGroup, eggCycle, hp, attack, defense, spAtk, spDef, speed, total}) {
   
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
          {showFirstTab && 
            <AboutInfoTabScreen
              weakness={weakness}
            />
          }
          {showSecondTab && 
            <AttributesInfoTabScreen 
              height={height}
              weight={weight}
              abilities={abilities}
              malePercentage={malePercentage}
              femalePercentage={femalePercentage}
              eggGroup={eggGroup}
              eggCycle={eggCycle}
            />
          }
          {showThirdTab && 
            <StatsInfoTabScreen 
              hp={hp}
              attack={attack}
              defense={defense}
              spAtk={spAtk}
              spDef={spDef}
              speed={speed}
              total={total}
            />
          }
        </InfoContainer>
        <InfoPage>
          <h4>About</h4>
          <AboutInfoTabScreen
            weakness={weakness}
          />
          <h4>Attributes</h4>
          <AttributesInfoTabScreen 
            height={height}
            weight={weight}
            abilities={abilities}
            malePercentage={malePercentage}
            femalePercentage={femalePercentage}
            eggGroup={eggGroup}
            eggCycle={eggCycle}
          />
          <h4>Stats</h4>
          <StatsInfoTabScreen 
            hp={hp}
            attack={attack}
            defense={defense}
            spAtk={spAtk}
            spDef={spDef}
            speed={speed}
            total={total}
          />
        </InfoPage>
      </section>
    )

}
