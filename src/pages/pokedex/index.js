import React from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default function Pokedex() {
  return (
    <Container>
      <Header />
      Pokedex
      <Link to="/pokemon" >Ir Para Pokemon</Link>
    </Container>
  )
}

