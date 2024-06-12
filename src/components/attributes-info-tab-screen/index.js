import React from 'react'

import { Container, DataItemAttributesList } from './styles'

import MaleSimbol from '../../assets/icons/male.png'
import FemaleSimbol from '../../assets/icons/female.png'

export default function AttributesInfoTabScreen() {
  return (
    <Container>
      <DataItemAttributesList>Height<span>2.30 Feet (0.70)</span></DataItemAttributesList>
      <DataItemAttributesList>Weight<span>15.6Lbs (6.9kg)</span></DataItemAttributesList>
      <DataItemAttributesList>Abilities<span>Overgrow, Chlorphyll</span></DataItemAttributesList>

      <h5>Breeding</h5>
      <DataItemAttributesList>Gender<span><img src={MaleSimbol} alt='Simbolo Macho '/> 87,5%</span><span><img src={FemaleSimbol} alt='Simbolo Fêmea'/> 12,5%</span></DataItemAttributesList>
      <DataItemAttributesList>Egg Group<span>Monster</span></DataItemAttributesList>
      <DataItemAttributesList>Egg Cycle<span>Plant</span></DataItemAttributesList>
    </Container>
  )
}
