import React from 'react'
import ProgressBar from '../ProgressBar'

import { StatsTabScreenSection } from './styles'


export default function StatsInfoTabScreen() {
  return (
    <StatsTabScreenSection>
      <li>HP<span>45<ProgressBar progress='45' /></span></li>
      <li>Attack<span>49<ProgressBar progress='49' /></span></li>
      <li>Defense<span>49<ProgressBar progress='' /></span></li>
      <li>Sp. Atk<span>65<ProgressBar progress='' /></span></li>
      <li>Sp. Def<span>65<ProgressBar progress='' /></span></li>
      <li>Speed<span>45<ProgressBar progress='' /></span></li>
      <li>Total<p>318</p></li>
    </StatsTabScreenSection>
  )
}
