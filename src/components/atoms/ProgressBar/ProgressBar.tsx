import {
  ProgressBarBackground,
  ProgressPowerBar,
} from '@/components/atoms/ProgressBar/styles';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const width = `${progress}%`;
  const color = progress < 50 ? 'red' : 'green';

  return (
    <ProgressBarBackground>
      <ProgressPowerBar width={width} color={color} />
    </ProgressBarBackground>
  );
};

export default ProgressBar;
