import React from 'react'

import PokeballIcon from '../../assets/icons/pokeball-icon.svg'
import { Container } from './styles'
 
export default function PokemonPageLoader() {
  return (
    <Container>
        <img src={PokeballIcon} alt='carregando página'/>
    </Container>
  )
}
