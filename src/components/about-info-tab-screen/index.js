import React, { useState } from 'react';
import { Container, StoryContainer, WeaknessesContainer } from './styles';

export default function AboutInfoTabScreen({ weakness }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    const fullText = "This section is intended for a brief description of the Pokémon listed here, as we await updates, take the opportunity to consult all the skills and details that are on the page.";
    const truncatedText = fullText.substring(0, 40) + '...';

    return (
        <Container>
            <StoryContainer>
                <h5>Story</h5>
                <p>
                    {isExpanded ? fullText : truncatedText}
                    <span onClick={handleToggleExpand} style={{ color: 'blue', cursor: 'pointer' }}>
                      {isExpanded ? ' See Less' : ' See More'}
                    </span>
                </p>
            </StoryContainer>
            <WeaknessesContainer>
                <h5>Weaknesses</h5>
                <ul>
                    {weakness}
                </ul>
            </WeaknessesContainer>
        </Container>
    );
}
