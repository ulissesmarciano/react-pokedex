import React from 'react'
import PokemonHeader from '../../components/pokemon-header'
import InfoTabList from '../../components/info-tab-list'
import { Link } from 'react-router-dom'

import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles'

const PokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"

const Bulbassaur = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
const Yvessaur = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
const Venossaur = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"


export default function Pokemon() {
  return (
    <Container>
      <PokemonHeader />
        <NumberPageContainer>
          <Link to='/'>
            #001
          </Link>
        </NumberPageContainer>
      <LeftSideSection>
        <PokemonNameContainer>
            <h4>Bulbassauro</h4>
            <p>#001</p>
        </PokemonNameContainer>
            <SkillContainer>
              <ul>
                <li>planta</li>
                <li>veneno</li>
              </ul>
            </SkillContainer>
        <PokemonImageContainer>
          <img src={PokemonImage} alt='Imagem do pokémon'/>
        </PokemonImageContainer>
        <EvolutionContainer>
          <h6>Evolutions</h6>
          <EvolutionImageContainer>
            <ul>
              <li><img src={Bulbassaur} alt='#'/></li>
              <li><img src={Yvessaur} alt='#'/></li>
              <li><img src={Venossaur} alt='#'/></li>
            </ul>
          </EvolutionImageContainer>
        </EvolutionContainer>
      </LeftSideSection>
      <RightSideSection>
        <InfoTabListContainer>
          <InfoTabList/>
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        <Link>
            #001
        </Link>
      </NumberPageContainer>
    </Container>
  )
}

