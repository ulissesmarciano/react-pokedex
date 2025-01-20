import React, { useState } from "react";
import { Container, StoryContainer, WeaknessesContainer } from "./styles";

export default function AboutInfoTabScreen({
  weakness,
  pokemonName,
  pokemonType,
  pokemonHP,
  pokemonSpeed,
  pokemonAbility,
  pokemonMove,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Meet ${pokemonName}, an amazing ${pokemonType}-type Pokémon with a base HP of ${pokemonHP} and speed of ${pokemonSpeed}. Known for its ability ${pokemonAbility} and signature move ${pokemonMove}, it stands out as a true powerhouse in battles!`;
  const truncatedText = fullText.substring(0, 40) + "...";

  return (
    <Container>
      <StoryContainer>
        <h5>Story</h5>
        <p>
          {isExpanded ? fullText : truncatedText}
          <span
            onClick={handleToggleExpand}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isExpanded ? " See Less" : " See More"}
          </span>
        </p>
      </StoryContainer>
      <WeaknessesContainer>
        <h5>Weaknesses</h5>
        <ul>{weakness}</ul>
      </WeaknessesContainer>
    </Container>
  );
}
