import React from 'react'

import { CardTitleContainer, Container, ImageContainer, PokemonCardBottomContainer, TypeContainer } from './styles'
import { Link } from 'react-router-dom'

const PokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

export default function PokemonCard() {
  return (
    <Link to="/pokemon">
      <Container>
          <ImageContainer>
              <img src={PokemonImage} alt='Imagem do pokémon' />
          </ImageContainer>
          <PokemonCardBottomContainer>
            <CardTitleContainer>
              <p># 003</p>
              <h4>Bulbasauro</h4>
            </CardTitleContainer>
            <TypeContainer>
              <li>Planta</li>
              <li>Veneno</li>
            </TypeContainer>
          </PokemonCardBottomContainer>
      </Container>
    </Link>
  )
}
