import React from 'react'

import { Container, ImageContainer } from './styles'

const PokemonImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

export default function PokemonCard() {
  return (
    <Container>
        <ImageContainer>
            <img src={PokemonImage} alt='Imagem do pokémon' />
        </ImageContainer>
    </Container>
  )
}
