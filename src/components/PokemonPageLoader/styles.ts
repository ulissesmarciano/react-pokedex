import styled from 'styled-components';

export const Container = styled.div`
  img {
    filter: brightness(0.8);
    position: absolute;
    height: 10rem;
    width: 10rem;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    @keyframes loading {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: loading 2s linear infinite;
  }
`;
