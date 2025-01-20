import styled from "styled-components";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.section`
  margin: 1rem 1rem;
  h5 {
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    @media (min-width: 425px) {
      font-size: 1.2rem;
    }
  }
`;

export const StoryContainer = styled.div`
  p {
    margin-bottom: 1rem;
    @media (min-width: 425px) {
      line-height: 1.4rem;
    }

    @media (min-width: 1024px) {
      margin: 1rem -1rem;
    }
  }
`;
export const WeaknessesContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-left: 0.5rem;
      padding: 0 0.8rem;

      border-radius: 50px;
      text-transform: capitalize;

      ${pokemonTypeStyles}
    }
  }
`;
