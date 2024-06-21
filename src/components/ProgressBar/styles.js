// styles.js

import styled from 'styled-components';

export const ProgressBarBackground = styled.div`
    margin-left: 1rem;
  min-width: 100%;
  height: 5px;

  background-color: lightgray;
  border-radius: 10px;
`;

export const ProgressPowerBar = styled.div`
  height: 100%;
  border-radius: 8px;
  /* Estilo específico do ProgressPowerBar */
  width: ${({ width }) => width}; /* Utilizando a largura passada como propriedade */
  max-width: 100%; /* Garante que a largura máxima seja 100% do container */
  background-color: ${({ color }) => color}; /* Cor da barra de progresso */
`;

