import React from 'react'
import { Container, DataItemAboutList } from './styles'

import MaleSimbol from '../../assets/icons/male.png'
import FemaleSimbol from '../../assets/icons/female.png'

export default function AboutInfoTabScreen() {
  return (
    <Container>
      <DataItemAboutList>Height<span>2.30 Feet (0.70)</span></DataItemAboutList>
      <DataItemAboutList>Weight<span>15.6Lbs (6.9kg)</span></DataItemAboutList>
      <DataItemAboutList>Abilities<span>Overgrow, Chlorphyll</span></DataItemAboutList>

      <h5>Breeding</h5>
      <DataItemAboutList>Gender<span><img src={MaleSimbol} alt='Simbolo Macho '/> 87,5%</span><span><img src={FemaleSimbol} alt='Simbolo Fêmea'/> 12,5%</span></DataItemAboutList>
      <DataItemAboutList>Egg Group<span>Monster</span></DataItemAboutList>
      <DataItemAboutList>Egg Cycle<span>Plant</span></DataItemAboutList>
    </Container>
  )
}
