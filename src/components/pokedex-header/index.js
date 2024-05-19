import React from 'react'
import { Container, HomeIcon, MenuContainer } from './styles'

import PokeballIcon from '../../assets/icons/pokeball-icon.svg'

export default function PokedexHeader() {
  return (
    <Container>
      <MenuContainer>
        <HomeIcon src={PokeballIcon} alt='Icone da Homepage'/>
      </MenuContainer>
    </Container>
  )
}
