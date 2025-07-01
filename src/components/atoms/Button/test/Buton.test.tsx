import { beforeEach, describe, vi, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '@/components/atoms/Button/Button';
import userEvent from '@testing-library/user-event';
import type { VariantType } from '@/constants/buttonStyles';

describe('Button', () => {
  const mockClick = vi.fn();
  const name = 'Ver Mais';
  const variantName = 'verMaisButton';

  beforeEach(() =>
    render(<Button name={name} onClick={mockClick} variant={variantName} />),
  );

  it('should render the text button', () => {
    const button = screen.getByText('Ver Mais');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /ver mais/i });

    await user.click(button);

    expect(mockClick).toHaveBeenCalled;
  });
  it.each([['primary'], ['secondary'], ['danger']])(
    'renders button with %s variant',
    (variant) => {
      render(
        <Button
          name="Click"
          onClick={vi.fn()}
          variant={variant as VariantType}
        />,
      );
      const btn = screen.getByRole('button', { name: /click/i });
      expect(btn).toBeInTheDocument();
    },
  );
});
