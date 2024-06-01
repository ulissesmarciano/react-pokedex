import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import { Link, useParams } from 'react-router-dom'
import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles'


import PokemonHeader from '../../components/pokemon-header'
import InfoTabList from '../../components/info-tab-list'
import EvolutionList from '../../components/evolution-list'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async (id) => {
    const details = await getPokemonData(id)
    setPokemon(details.data)
  }

  const getPokemonData = async (id) => {
    const res = await api.get(`/pokemon/${id}`)
    return res

  }

  const {id} = useParams();
  const idNumber = parseInt(id)

  useEffect(() => {
    getPokemon(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <PokemonHeader />
      {console.log(pokemon)}
        <NumberPageContainer>
          <Link 
          to={`/pokemon/${id > 1 ? id - 1 : id}`}
          onClick={Pokemon}
          >
            #001
          </Link>
        </NumberPageContainer>
      <LeftSideSection>
        <PokemonNameContainer>
            <h4>{pokemon.name}</h4>
            <p>#{pokemon.id < 10 ? `0${pokemon.id}`: `${pokemon.id}`}</p>
        </PokemonNameContainer>
            <SkillContainer>
              <ul>
                {pokemon.types?.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </SkillContainer>
        <PokemonImageContainer>
          <img src={pokemon.sprites?.other.dream_world.front_default === null ? pokemon.sprites?.other['official-artwork'].front_default : pokemon.sprites?.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemon.name}`}/>
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
        to={`/pokemon/${idNumber + 1}`}
        onClick={Pokemon}
        >
            #001
        </Link>
      </NumberPageContainer>
    </Container>
  )
}

