import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, PokemonCardContainer, TitleContainer } from './styles'

import PokedexHeader from '../../components/pokedex-header'
import SearchBar from '../../components/search-bar'
import PokemonCard from '../../components/pokemon-card'
import PokemonTypesItem from '../../components/pokemon-types-item'



export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);

  async function getAllPokemons() {
      var limit = 151;
           
      const response = await api.get(`/pokemon?limit=${limit}`).then((res) => (res)).catch((err) => console.log(err))
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async pokemon => {
          const {id, types, sprites} = await getMoreInfo(pokemon.url)

          return{
            name: pokemon.name,
            id,
            types,
            sprites
          }
        })
      )
      setPokemons(payloadPokemons)
    }
    
    
    async function getMoreInfo(url) {
      const response = await api.get(url)
      const {id, types, sprites} = response.data;
      
      return {
      id, types, sprites
    }
    
  }
  
  useEffect(() => {
    getAllPokemons()
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
 
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
          {pokemons.map((pokemon, index) => <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            cardBackground={pokemon.types[0].type.name}
            avatar={pokemon.sprites.other.dream_world.front_default === null ? pokemon.sprites.other['official-artwork'].front_default : pokemon.sprites.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemon.name}`}
            types={pokemon.types.map((types, index) => (
              <PokemonTypesItem 
                key={index}
                types={types.type.name}
                typeBackground={types.type.name}
              />
            ))}
            to={`/pokemon/${pokemon.id}`}
          />)}
        </PokemonCardContainer>
    </Container>
  )
}

