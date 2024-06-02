import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles'


import PokemonHeader from '../../components/pokemon-header'
import InfoTabList from '../../components/info-tab-list'
import EvolutionList from '../../components/evolution-list'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  const [species, setSpecies] = useState([])
  const [evolutions, setEvolutions] = useState([])

  const getPokemon = async (id) => {
    const details = await getPokemonData(id)
    setPokemon(details.data)
  }

  const getSpecies = async (id) => {
    const details = await getSpeciesData(id)
    setSpecies(details.data)
  }

  const getEvolutions = async () => {
    const details = await getEvolutionsData()
    setEvolutions(details.data)
  }


  //===============================================
  
  
  const getPokemonData = async (id) => {
    const res = await api.get(`/pokemon/${id}`)
    return res
    
  }
  
  const getSpeciesData = async (id) => {
  const res = await api.get(`/pokemon-species/${id}`)
    return res
  }

  const getEvolutionsData = async () => {
    const res = await axios.get(`${species.evolution_chain.url}`)
    console.log(res)
    return res
  }

    const {id} = useParams();
  const idNumber = parseInt(id);

  const PageNumberFoward = idNumber + 1;
  const PageNumberBack = idNumber - 1;
 
  useEffect(() => {
    getPokemon(id)
    getSpecies(id)
    getEvolutions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(evolutions.chain)
  //console.log(evolutions.chain)

  return (
    <Container>
      <PokemonHeader />
        <NumberPageContainer>
          <Link 
          to={`/pokemon/${id > 1 ? id - 1 : id}`}
          onClick={Pokemon}
          >
            #{PageNumberBack < 10 ? `0${PageNumberBack}` : `${PageNumberBack}`}
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
                  <li className={type.type.name} key={index}>{type.type.name}</li>
                ))}
              </ul>
            </SkillContainer>
        <PokemonImageContainer>
          <img className={pokemon.types?.[0].type.name} src={pokemon.sprites?.other.dream_world.front_default === null ? pokemon.sprites?.other['official-artwork'].front_default : pokemon.sprites?.other.dream_world.front_default}
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
          #{PageNumberFoward < 10 ? `0${PageNumberFoward}` : `${PageNumberFoward}`}
        </Link>
      </NumberPageContainer>
    </Container>
  )
}

