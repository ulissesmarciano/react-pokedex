import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, PokemonCardContainer, TitleContainer } from './styles';

import PokedexHeader from '../../components/pokedex-header';
import SearchBar from '../../components/search-bar';
import PokemonCard from '../../components/pokemon-card';
import PokemonTypesItem from '../../components/pokemon-types-item';
import PokemonCardLoader from '../../components/card-loader';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getAllPokemons() {
    try {
      const limit = 151;
      const response = await api.get(`/pokemon?limit=${limit}`);
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const { id, types, sprites } = await getMoreInfo(pokemon.url);
          return {
            name: pokemon.name,
            id,
            types,
            sprites,
          };
        })
      );
      setPokemons(payloadPokemons);
    } catch (err) {
      setError('Erro ao carregar os Pokémons');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function getMoreInfo(url) {
    const response = await api.get(url);
    const { id, types, sprites } = response.data;
    return { id, types, sprites };
  }

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
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
        {loading ? (
          Array.from({ length: 50 }).map((_, index) => (
            <PokemonCardLoader key={index} />
          ))
        ) : error ? (
          <div>{error}</div>
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              cardBackground={pokemon.types[0].type.name}
              avatar={
                pokemon.sprites.other.dream_world.front_default === null
                  ? pokemon.sprites.other['official-artwork'].front_default
                  : pokemon.sprites.other.dream_world.front_default
              }
              alt={`Foto do pokémon ${pokemon.name}`}
              types={pokemon.types.map((type, index) => (
                <PokemonTypesItem
                  key={index}
                  types={type.type.name}
                  typeBackground={type.type.name}
                />
              ))}
              to={`/pokemon/${pokemon.name}`}
            />
          ))
        )}
      </PokemonCardContainer>
    </Container>
  );
}

