import EvolutionItemList from '@/components/atoms/EvolutionItemList/EvolutionItemList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, it, expect, vi } from 'vitest';

describe('EvolutionItemList', () => {
  const handleClick = vi.fn();
  const props = {
    src: 'https://example.com/pikachu.png',
    alt: 'imagem do pikachu',
    pokemonName: 'Pikachu',
    type: [<li key="electric">Electric</li>],
    className: 'pokemon-class',
    to: '/pokemon/pikachu',
    onClick: handleClick,
  };
  beforeEach(() =>
    render(
      <MemoryRouter>
        <EvolutionItemList {...props} />
      </MemoryRouter>,
    ),
  );

  it('should render image with correct src and alt', () => {
    const img = screen.getByAltText('imagem do pikachu');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.src);
  });

  it('should render pokemon name', () => {
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });

  it('should render the type list item', () => {
    const skillItem = screen.getByText('Electric');
    expect(skillItem).toBeInTheDocument();
    expect(skillItem.tagName).toBe('LI');
  });

  it('should render link with correct href', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.to);
  });

  it('should call onClick when the button is clicked', async () => {
    const link = screen.getByRole('link');
    const user = userEvent.setup();
    await user.click(link);
  });
});
