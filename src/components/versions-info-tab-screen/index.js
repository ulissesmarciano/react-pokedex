import React, { useState } from 'react'

import NormalVersionTabScreen from './normal-version-tab-screen'
import ShinyVersionTabScreen from './shiny-version-tab-screen'

import { Container, DataItemVersionsList, NavVersionsContainer } from './styles'

import MaleSimbol from '../../assets/icons/male.png'
import FemaleSimbol from '../../assets/icons/female.png'

export default function VersionsInfoTabScreen() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1")
  }

  const handleTab2 = () => {
    setActiveTab("tab2")
  }

  return (
    <Container>
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
      <DataItemVersionsList>Height<span>2.30 Feet (0.70)</span></DataItemVersionsList>
      <DataItemVersionsList>Weight<span>15.6Lbs (6.9kg)</span></DataItemVersionsList>
      <DataItemVersionsList>Abilities<span>Overgrow, Chlorphyll</span></DataItemVersionsList>

      <h5>Breeding</h5>
      <DataItemVersionsList>Gender<span><img src={MaleSimbol} alt='Simbolo Macho '/> 87,5%</span><span><img src={FemaleSimbol} alt='Simbolo Fêmea'/> 12,5%</span></DataItemVersionsList>
      <DataItemVersionsList>Egg Group<span>Monster</span></DataItemVersionsList>
      <DataItemVersionsList>Egg Cycle<span>Plant</span></DataItemVersionsList>
    </Container>
  )
}
