import styled from 'styled-components';

interface ProgressPowerBarProps {
  width: string;
  color?: string | undefined;
}

export const ProgressBarBackground = styled.div`
  margin-left: 1rem;
  min-width: 100%;
  height: 5px;

  background-color: lightgray;
  border-radius: 10px;
`;

export const ProgressPowerBar = styled.div<ProgressPowerBarProps>`
  height: 100%;
  border-radius: 8px;
  width: ${({ width }) => width};
  max-width: 100%;
  background-color: ${({ color }) => color};
`;
