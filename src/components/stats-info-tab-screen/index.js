import React from 'react'
import ProgressBar from '../ProgressBar'

import { StatsTabScreenSection } from './styles'


export default function StatsInfoTabScreen({progress, total}) {
  return (
    <StatsTabScreenSection>
      <li>HP<span>{progress}<ProgressBar progress={progress}/></span></li>
      <li>Attack<span>{progress}<ProgressBar progress={progress} /></span></li>
      <li>Defense<span>{progress}<ProgressBar progress={progress} /></span></li>
      <li>Sp. Atk<span>{progress}<ProgressBar progress={progress} /></span></li>
      <li>Sp. Def<span>{progress}<ProgressBar progress={progress} /></span></li>
      <li>Speed<span>{progress}<ProgressBar progress={progress} /></span></li>
      <li>Total<p>{total}</p></li>
    </StatsTabScreenSection>
  )
}
