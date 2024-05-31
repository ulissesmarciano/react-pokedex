import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import axios from 'axios'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import PokedexHeader from '../../components/pokedex-header'
import PokemonCard from '../../components/pokemon-card'
import SearchBar from '../../components/search-bar'


export default function Pokedex() {
  
  useEffect(() => {
    getPokemons();
  }, [])

  const [pokemons, setPokemons] = useState([])

  const getPokemons = () => {
    var limit = 151
    var endpoints = []

    for (var i = 1; i <= limit; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    } 

    axios
    .all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res)).catch((err) => console.log(err))
  }


  
  return (
    <Container>
      <PokedexHeader />
      {console.log(pokemons)}
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

