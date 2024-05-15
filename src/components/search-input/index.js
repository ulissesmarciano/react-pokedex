import React from 'react'

import SearchIcon from '../../assets/icons/search-icon.svg' 
import { Container, SearchLabel } from './styles'

export default function SearchInput() {
  return (
    <Container>
        <img src={SearchIcon} alt='Ícone de pesquisa' />
            <SearchLabel placeholder='Nome ou Número' />
    </Container>
  )
}
