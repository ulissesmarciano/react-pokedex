import {
  ProgressBarBackground,
  ProgressPowerBar,
} from '@/components/atoms/ProgressBar/styles';

interface ProgressBarProps {
  progress: number;
  width?: string;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const width = `${progress}%`;
  const color = progress < 50 ? 'red' : 'green';

  return (
    <ProgressBarBackground>
      <ProgressPowerBar data-testid="progressbar" width={width} color={color} />
    </ProgressBarBackground>
  );
};

export default ProgressBar;
