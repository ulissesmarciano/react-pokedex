import React from 'react'

import { Container, SearchButton, SearchLabel } from './styles'

import SearchIcon from '../../assets/icons/search-icon.svg' 

export default function SearchBar() {
  return (
    <Container>
      <SearchLabel>
        <img src={SearchIcon} alt='Ícone de pesquisa' />
        <input placeholder='Nome ou Número' type='text'/>
      </SearchLabel>
        <SearchButton>Buscar</SearchButton>  
    </Container>
  )
}
