import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export default function Pokemon() {
  return (
    <Container>
        <Link to="/" >Voltar</Link>
        Pokemon
    </Container>
  )
}
