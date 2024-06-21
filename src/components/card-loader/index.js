import React from 'react'

import { CardTitleContainer, Container, ImageContainer, PokemonCardBottomContainer, TypeContainer } from './styles'

export default function PokemonCardLoader() {
  return (
    <Container>
        <div className='image-container'/>
        <div className='bottom-info-container'>
          <ul>
            <li />
            <li />
          </ul>
          <ul>
            <li />
            <li />
          </ul>
        </div>
    </Container>
  )
}
