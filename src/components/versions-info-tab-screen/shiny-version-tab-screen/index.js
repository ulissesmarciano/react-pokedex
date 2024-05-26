import React from 'react'

import { Container, DataItemVersionsList } from './styles'

import MaleSimbol from '../../../assets/icons/male.png'
import FemaleSimbol from '../../../assets/icons/female.png'

export default function ShinyVersionTabScreen() {
  return (
    <Container>
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
