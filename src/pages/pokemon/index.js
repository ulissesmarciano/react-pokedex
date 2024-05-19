import React from 'react'
import { Container, BackArrowContainer } from './styles'
import { Link } from 'react-router-dom'

import BackArrow from '../../assets/icons/left-arrow-icon.svg'

export default function Pokemon() {
  return (
    <Container>
        <BackArrowContainer>
          <Link to="/" ><img src={BackArrow} alt='ícone voltar a página anterior'/> </Link>
        </BackArrowContainer>
    </Container>
  )
}
