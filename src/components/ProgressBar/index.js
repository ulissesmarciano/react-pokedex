import React from 'react';
import { ProgressBarBackground, ProgressPowerBar } from './styles';

const ProgressBar = ({ progress }) => {
  // Lógica para determinar a largura e a cor da barra de progresso
  const width = `${progress}%`;
  const color = progress < 50 ? "red" : "green";

  return (
    <ProgressBarBackground>
      <ProgressPowerBar width={width} color={color} />
    </ProgressBarBackground>
  );
};

export default ProgressBar;

