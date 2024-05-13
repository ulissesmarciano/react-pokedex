import React from 'react'

import SearchIcon from '../../assets/icons/searchicon.png'
import { ButtonContainer } from './styles'


export default function SearchButton() {
  return (
    <ButtonContainer>
        <img src={SearchIcon} alt='Botão de pesquisa' />
    </ButtonContainer>
  )
}
