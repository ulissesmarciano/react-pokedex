import React from 'react'
import { Container } from './styles'

export default function PokemonTypesItem({typeBackground, types}) {
  return (
    <Container className={typeBackground}>{types}</Container>
  )
}
