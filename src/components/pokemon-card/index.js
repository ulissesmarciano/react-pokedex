import React from 'react'

import { CardTitleContainer, Container, ImageContainer, PokemonCardBottomContainer, TypeContainer } from './styles'
import { Link } from 'react-router-dom'

export default function PokemonCard({
  to,
  cardBackground,
  avatar,
  alt,
  id,
  name,
  types
}) {
  return (
    <Link to={to}>
      <Container>
          <ImageContainer className={cardBackground}>
              <img src={avatar} alt={alt} />
          </ImageContainer>
          <PokemonCardBottomContainer>
            <CardTitleContainer>
              <p>#{id < 10 ? `0${id}`: `${id}`}</p>
              <h4>{name}</h4>
            </CardTitleContainer>
            <TypeContainer>
              {types}
            </TypeContainer>
          </PokemonCardBottomContainer>
      </Container>
    </Link>
  )
}
