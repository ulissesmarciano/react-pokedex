import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';

// Mock dos componentes styled-components
vi.mock('@/components/atoms/ProgressBar/styles', () => ({
  ProgressBarBackground: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="progress-background">{children}</div>
  ),
  ProgressPowerBar: ({
    width,
    color,
    'data-testid': dataTestId,
  }: {
    width: string;
    color: string;
    'data-testid': string;
  }) => <div data-testid={dataTestId} data-width={width} data-color={color} />,
}));

describe('ProgressBar Component', () => {
  it('should render the progress bar with correct structure', () => {
    render(<ProgressBar progress={75} width="200px" />);

    expect(screen.getByTestId('progress-background')).toBeInTheDocument();
    expect(screen.getByTestId('progressbar')).toBeInTheDocument();
  });

  it('should display correct width based on progress prop', () => {
    render(<ProgressBar progress={30} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-width', '30%');
  });

  it('should show red color when progress is less than 50%', () => {
    render(<ProgressBar progress={25} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-color', 'red');
  });

  it('should show green color when progress is 50% or more', () => {
    render(<ProgressBar progress={75} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-color', 'green');
  });

  it('should show red color when progress is exactly 49%', () => {
    render(<ProgressBar progress={49} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-color', 'red');
  });

  it('should show green color when progress is exactly 50%', () => {
    render(<ProgressBar progress={50} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-color', 'green');
  });

  it('should handle 0% progress', () => {
    render(<ProgressBar progress={0} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-width', '0%');
    expect(progressBar).toHaveAttribute('data-color', 'red');
  });

  it('should handle 100% progress', () => {
    render(<ProgressBar progress={100} width="200px" />);

    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toHaveAttribute('data-width', '100%');
    expect(progressBar).toHaveAttribute('data-color', 'green');
  });
});
