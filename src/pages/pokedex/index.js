import React from 'react'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import Header from '../../components/header'
import PokemonCard from '../../components/pokemon-card'
import SearchBar from '../../components/search-bar'

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
            <SearchBar />
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

