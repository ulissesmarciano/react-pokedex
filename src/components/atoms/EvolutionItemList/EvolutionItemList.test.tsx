import EvolutionItemList from '@/components/atoms/EvolutionItemList/EvolutionItemList';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, it, expect } from 'vitest';

describe('EvolutionItemList', () => {
  const props = {
    src: 'https://example.com/pikachu.png',
    alt: 'imagem do pikachu',
    pokemonName: 'Pikachu',
    type: [<li key="electric">Electric</li>],
    className: 'pokemon-class',
    to: '/pokemon/pikachu',
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
});
