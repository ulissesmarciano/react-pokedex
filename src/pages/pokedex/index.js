import React from 'react'
import Header from '../../components/header'

import { Container, PokemonCardContainer } from './styles'
import PokemonCard from '../../components/pokemon-card'

export default function Pokedex() {
  return (
    <Container>
      <Header />
        <PokemonCardContainer>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </PokemonCardContainer>
    </Container>
  )
}

