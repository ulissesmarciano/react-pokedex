import styled from 'styled-components';
import { pokemonTypeStyles } from '../../../constants/colors';

export const Container = styled.li`
  margin-bottom: 1rem;

  .image-container {
    height: 200px;
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    ${pokemonTypeStyles}

    border-radius: 8px;
  }

  .image-container img {
    height: 8rem;
    width: 8rem;
  }

  .card-bottom-container {
    height: 4rem;
    padding: 0.5rem 0;

    display: flex;
    justify-content: space-between;
  }

  .card-bottom-container .card-title-container {
    display: flex;
    flex-direction: column;

    text-transform: capitalize;
  }

  .card-bottom-container .card-title-container p {
    margin-bottom: 0.5rem;
    color: #c7c7c7;
    font-weight: 700;
    @media (min-width: 425px) {
      font-size: 0.8rem;
    }

    @media (min-width: 650px) {
      font-size: 1rem;
    }
  }

  .card-bottom-container .card-title-container h4 {
    color: #7d3438;
    font-weight: 800;

    @media (min-width: 425px) {
      font-size: 0.9rem;
    }
  }

  .card-bottom-container ul {
    height: 100%;

    display: flex;
    flex-direction: column;

    text-transform: capitalize;
  }
`;
