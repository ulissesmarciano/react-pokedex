import styled from 'styled-components';

export const Container = styled.ul`
  margin: 1rem 0;
  h5 {
    margin: 1.6rem 0 1.2rem;
    font-size: 1.4rem;
  }
`;

export const DataItemAttributesList = styled.li`
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;

  color: #c1c1c1;
  font-weight: 800;
  text-transform: capitalize;

  span {
    margin-left: 1rem;
    color: #000;
    font-weight: 500;
    display: flex;
    align-items: center;

    img {
      height: 1rem;
      width: 1rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;
