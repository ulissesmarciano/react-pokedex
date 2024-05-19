import React from 'react'
import PokemonHeader from '../../components/pokemon-header'

import { Container, PokemonImageContainer, PokemonNameContainer, SkillContainer } from './styles'

const PokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

export default function Pokemon() {
  return (
    <Container>
      <PokemonHeader />
      <PokemonNameContainer>
          <h5>Bulbassauro</h5>
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
    </Container>
  )
}
