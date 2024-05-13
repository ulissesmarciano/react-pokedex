import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default function Pokedex() {
  return (
    <Container>
      Pokedex
      <Link to="/pokemon" >Ir Para Pokemon</Link>
    </Container>
  )
}

