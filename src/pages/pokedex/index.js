import React from 'react'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import PokedexHeader from '../../components/pokedex-header'
import PokemonCard from '../../components/pokemon-card'
import SearchBar from '../../components/search-bar'

export default function Pokedex() {
  return (
    <Container>
      <PokedexHeader />
        <div>
          <TitleContainer>
            <h2>Pokédex</h2>
            <p>Procure por seu pokémon pelo nome ou seu número</p>
          </TitleContainer>
          <div>
            <SearchBar />
          </div>
        </div>
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

