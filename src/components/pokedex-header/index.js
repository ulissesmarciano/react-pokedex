import React from 'react'
import { Container, HomeIcon, MenuContainer } from './styles'

import PokeballIcon from '../../assets/icons/pokeball-icon.svg'
import { Link } from 'react-router-dom'

export default function PokedexHeader() {
  return (
    <Container>
      <MenuContainer>
        <Link to='/'>
          <HomeIcon src={PokeballIcon} alt='Icone da Homepage'/>
        </Link>
      </MenuContainer>
    </Container>
  )
}
