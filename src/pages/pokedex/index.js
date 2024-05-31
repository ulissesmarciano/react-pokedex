import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import PokedexHeader from '../../components/pokedex-header'
import PokemonCard from '../../components/pokemon-card'
import SearchBar from '../../components/search-bar'



export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon')
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async pokemon => {
          const {id, types} = await getMoreInfo(pokemon.url)

          return{
            name: pokemon.name,
            id,
            types
          }
        })
      )
      setPokemons(payloadPokemons)
    }
    getAllPokemons()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getMoreInfo(url) {
    const response = await api.get(url)
    const {id, types} = response.data;

    return {
      id, types
    }
  }
 
  
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

