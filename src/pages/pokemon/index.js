import React, { useEffect, useState } from 'react'

import api from '../../services/api'
//import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles'


import PokemonHeader from '../../components/pokemon-header'
import InfoTabList from '../../components/info-tab-list'
import EvolutionList from '../../components/evolution-list'

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const id = 1; // Defina o ID do Pokémon que você deseja buscar

  const fetchPokemonData = async () => {
    try {
      const response = await api.get(`/pokemon/${id}`); // Use o ID fornecido para fazer uma solicitação para o Pokémon específico
      const pokemon = response.data;

      // Faz uma nova solicitação para o link species
      const speciesResponse = await api.get(pokemon.species.url);
      const speciesData = speciesResponse.data;

      // Faz uma nova solicitação para o link evolution_chain
      const evolutionChainResponse = await api.get(speciesData.evolution_chain.url);
      const evolutionChainData = evolutionChainResponse.data;

      // Atualiza o estado com os dados do pokemon, espécie e cadeia de evolução
      setPokemonData({
        ...pokemon,
        species: speciesData,
        evolution_chain: evolutionChainData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [id]);

  console.log(pokemonData)

  return (
    <Container>
      <PokemonHeader />
        <NumberPageContainer>
          <Link 
          to={`/pokemon/${id > 1 ? id - 1 : id}`}
          onClick={Pokemon}
          >
            #{id < 10 ? `0${id}` : `${id}`}
          </Link>
        </NumberPageContainer>
      <LeftSideSection>
        <PokemonNameContainer>
          <h4>{pokemonData?.name}</h4>
            {/* <h4>{pokemonData.name}</h4>
            <p>#{pokemonData.id < 10 ? `0${pokemonData.id}`: `${pokemonData.id}`}</p> */}
        </PokemonNameContainer>
            <SkillContainer>
              <ul>
                {/* {pokemonData.types?.map((type, index) => (
                  <li className={type.type?.name} key={index}>{type.type?.name}</li>
                ))} */}
              </ul>
            </SkillContainer>
        <PokemonImageContainer>
          {/* <img className={pokemonData.types?.[0].type.name} src={pokemonData.sprites?.other.dream_world.front_default === null ? pokemonData.sprites?.other['official-artwork'].front_default : pokemonData.sprites?.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemonData}`}/> */}
        </PokemonImageContainer>
        <EvolutionContainer>
          <h6>Evolutions</h6>
          <EvolutionImageContainer>
            <EvolutionList/>
          </EvolutionImageContainer>
        </EvolutionContainer>
      </LeftSideSection>
      <RightSideSection>
        <InfoTabListContainer>
          <InfoTabList/>
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        <Link 
        to={`/pokemon/${id + 1}`}
        onClick={Pokemon}
        >
          #{id < 10 ? `0${id}` : `${id}`}
        </Link>
      </NumberPageContainer> 
    </Container>
  )
}

