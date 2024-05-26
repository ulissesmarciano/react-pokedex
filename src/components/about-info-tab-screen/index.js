import React from 'react'
import { Container, StoryContainer, WeaknessesContainer} from './styles'


export default function AboutInfoTabScreen() {
  return (
    <Container>
      <StoryContainer
      >
        <h5>Story</h5>
        <p>From the time it is born, a flame burns at the tip its tail, its lifi would end if  the flame were to go out. It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</p>
      </StoryContainer
      >
      <WeaknessesContainer>
        <h5>Weaknesses</h5>
        <ul>
          <li>Fire</li>
          <li>Water</li>
          <li>Ground</li>
        </ul>
      </WeaknessesContainer>
    </Container>
  )
}
