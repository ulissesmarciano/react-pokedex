import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 1rem;

  .image-container {
    height: 200px;
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: lightgray;
    border-radius: 6px;
  }

  .bottom-info-container {
    height: 4rem;
    padding: 0.5rem 0;

    display: flex;
    justify-content: space-between;
  }

  .bottom-info-container ul {
    display: flex;
    flex-direction: column;

    text-transform: capitalize;

    li {
      height: 10px;
      width: 70px;

      margin-bottom: 0.6rem;

      background-color: lightgray;
      border-radius: 4px;
    }
  }
`;
