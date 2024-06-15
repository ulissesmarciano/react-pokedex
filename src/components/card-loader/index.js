import React from 'react'

import { CardTitleContainer, Container, ImageContainer, PokemonCardBottomContainer, TypeContainer } from './styles'

export default function PokemonCardLoader() {
  return (
    <Container>
        <ImageContainer />
        <PokemonCardBottomContainer>
          <CardTitleContainer>
            <li />
            <li />
          </CardTitleContainer>
          <TypeContainer>
            <li />
            <li />
          </TypeContainer>
        </PokemonCardBottomContainer>
    </Container>
  )
}
