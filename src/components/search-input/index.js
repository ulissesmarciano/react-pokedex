import React from 'react'

import SearchIcon from '../../assets/icons/search-icon.svg' 
import { Container, SearchButton, SearchInput } from './styles'

export default function SearchInput() {
  return (
    <Container>
      <div>
        <img src={SearchIcon} alt='Ícone de pesquisa' />
        <SearchInput placeholder='Nome ou Número' type='text'/>
      </div>
        <SearchButton >Buscar</SearchButton>  
    </Container>
  )
}
