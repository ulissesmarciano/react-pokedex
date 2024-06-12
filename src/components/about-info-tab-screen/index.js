import React from 'react'
import { Container, StoryContainer, WeaknessesContainer} from './styles'


export default function AboutInfoTabScreen({weakness}) {
  return (
    <Container>
      <StoryContainer
      >
        <h5>Story</h5>
        <p>This section is intended for a brief description of the Pokémon listed here, as we await updates, take the opportunity to consult all the skills and details that are on the page.</p>
      </StoryContainer>
      <WeaknessesContainer>
        <h5>Weaknesses</h5>
        <ul>
          {weakness}
        </ul>
      </WeaknessesContainer>
    </Container>
  )
}
