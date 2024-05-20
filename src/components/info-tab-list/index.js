import React from 'react'
import {MainTab, MainTabList, MainTabPanel, MainTabs, SecondaryTab, SecondaryTabList, SecondaryTabPanel, SecondaryTabs} from './styled'

import 'react-tabs/style/react-tabs.css';

export default function InfoTabList() {
  return (
    <MainTabs>
        <MainTabList>
            <MainTab><h5>sobre</h5></MainTab>
            <MainTab><h5>versões</h5></MainTab>
            <MainTab><h5>estatísticas</h5></MainTab>
        </MainTabList>

        <MainTabPanel>
            <p></p>
        </MainTabPanel>
        <MainTabPanel>
            <SecondaryTabs>
                <SecondaryTabList>
                    <SecondaryTab>normal</SecondaryTab>
                    <SecondaryTab>shiny</SecondaryTab>
                </SecondaryTabList>
                <SecondaryTabPanel>
                    Conteúdo 1
                </SecondaryTabPanel>
                <SecondaryTabPanel>
                    Conteúdo 2
                </SecondaryTabPanel>
            </SecondaryTabs>
        </MainTabPanel>
        <MainTabPanel>
            <h6>Any content 3</h6>
        </MainTabPanel>
  </MainTabs>
  )
}
