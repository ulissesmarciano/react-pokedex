import React from 'react'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import Header from '../../components/header'
import PokemonCard from '../../components/pokemon-card'
import SearchInput from '../../components/search-input'

export default function Pokedex() {
  return (
    <Container>
      <Header />
        <div>
          <TitleContainer>
            <h2>Pokédex</h2>
            <p>Procure por seu pokémon pelo nome ou seu número</p>
          </TitleContainer>
          <div>
            <SearchInput />
          </div>
        </div>
        {/* <PokemonCardContainer>
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
        </PokemonCardContainer> */}
    </Container>
  )
}

