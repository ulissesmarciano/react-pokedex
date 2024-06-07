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

  const {id} = useParams()
  const pokemonNumber = parseInt(id)

  const fetchPokemonData = async () => {
    try {
      const response = await api.get(`/pokemon/${id}`);
      const pokemon = response.data;
  
      const speciesResponse = await api.get(pokemon.species.url);
      const speciesData = speciesResponse.data;
  
      const evolutionChainResponse = await api.get(speciesData.evolution_chain.url);
      const evolutionChainData = evolutionChainResponse.data;
  
      // Mapeie os tipos do Pokémon e faça uma solicitação para cada URL de tipo
      const typesData = await Promise.all(pokemon.types.map(async (type) => {
        const typeResponse = await api.get(type.type.url);
        return typeResponse.data;
      }));
  
      setPokemonData({
        ...pokemon,
        species: speciesData,
        evolution_chain: evolutionChainData,
        types: typesData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(pokemonData?.types[0].name)

  return (
    <Container>
      <PokemonHeader />
        <NumberPageContainer>
          <Link 
          to={`/pokemon/${pokemonNumber > 1 ? pokemonNumber - 1 : pokemonNumber}`}
          onClick={Pokemon}
          >
            #{id < 10 ? `0${id - 1}` : `${id - 1}`}
          </Link>
        </NumberPageContainer>
      <LeftSideSection>
        <PokemonNameContainer>
            <h4>{pokemonData?.name}</h4>
            <p>#{pokemonData?.id < 10 ? `0${pokemonData?.id}`: `${pokemonData?.id}`}</p>
        </PokemonNameContainer>
            <SkillContainer>
              <ul>
                {pokemonData?.types.map((type, index) => (
                  <li className={type.name} key={index}>{type.name}</li>
                ))}
              </ul>
            </SkillContainer>
        <PokemonImageContainer>
          <img className={pokemonData?.type?.[0].name} src={pokemonData?.sprites?.other.dream_world.front_default === null ? pokemonData?.sprites?.other['official-artwork'].front_default : pokemonData?.sprites?.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemonData}`}/>
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
          <InfoTabList
            weakness={''}
          />
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        <Link 
        to={`/pokemon/${pokemonNumber + 1}`}
        onClick={Pokemon}
        >
          #{id < 10 ? `0${id}` : `${id}`}
        </Link>
      </NumberPageContainer> 
    </Container>
  )
}

//RENDERIZAR A MESMA PÁGINA AO INVÉS DE CARREGÁ-LA INTEIRA