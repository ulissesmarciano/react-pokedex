import { useState } from 'react';
import {
  Container,
  StoryContainer,
  WeaknessesContainer,
} from '@/components/molecules/AboutInfoTabScreen/styles';
import PokemonTypesItem from '@/components/atoms/PokemonTypesItem/PokemonTypesItem';

interface AboutInfoTabScreenProps {
  weakness: string[];
  story: string;
}

export default function AboutInfoTabScreen({
  weakness,
  story,
}: AboutInfoTabScreenProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `${story}`;
  const truncatedText = fullText.substring(0, 40) + '...';

  return (
    <Container>
      <StoryContainer>
        <h5>Story</h5>
        <p>
          {isExpanded ? fullText : truncatedText}
          <span
            onClick={handleToggleExpand}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            {isExpanded ? ' See Less' : ' See More'}
          </span>
        </p>
      </StoryContainer>
      <WeaknessesContainer>
        <h5>Weaknesses</h5>
        <ul>
          {weakness.map((type, index) => (
            <PokemonTypesItem
              key={index}
              typeBackground={type}
              typeName={type}
            />
          ))}
        </ul>
      </WeaknessesContainer>
    </Container>
  );
}
