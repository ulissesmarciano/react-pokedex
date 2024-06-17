import React from 'react'

import { Container, SearchLabel } from './styles'

import SearchIcon from '../../assets/icons/search-icon.svg' 

export default function SearchBar({onChange, value}) {
  return (
    <Container>
      <SearchLabel>
        <img src={SearchIcon} alt='Ícone de pesquisa' />
        <input placeholder='Nome ou Número' type='text' onChange={onChange} value={value}/>
      </SearchLabel>
    </Container>
  )
}
