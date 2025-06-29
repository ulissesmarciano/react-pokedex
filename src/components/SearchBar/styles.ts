import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SearchLabel = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  border: 1px solid #b44b5060;
  border-radius: 5px;
  background-color: #b44b5010;
  img {
    height: 1rem;
    width: 1rem;
    margin: 0.2rem;

    opacity: 0.3;
  }

  input {
    width: 100%;
    height: 100%;

    border: none;
    background-color: transparent;
    outline: none;

    color: #00000090;
    font-size: 1rem;
    font-weight: 600;

    &::placeholder {
      color: #00000040;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  @media (min-width: 425px) {
    height: 2.2rem;
  }

  @media (min-width: 650px) {
    height: 2.4rem;
  }

  @media (min-width: 1024px) {
    input {
      font-size: 1.2rem;
    }
  }
`;
