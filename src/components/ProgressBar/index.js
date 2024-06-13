import React from 'react'
import { ProgressBarBackground, ProgressPowerBar } from './styles'



export default function ProgressBar({progress}) {
  return (
        <ProgressBarBackground>
          <ProgressPowerBar style={{width:`${progress}%`, background: `${progress < 50 ? "red" : "green"}`}}/>
        </ProgressBarBackground>
  )
}
