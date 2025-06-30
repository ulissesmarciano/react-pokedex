import PokemonCardLoader from '@/components/atoms/CardLoader/CardLoader';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

describe('CardLoader', () => {
  beforeEach(() => render(<PokemonCardLoader />));

  it('should render the PokemonCardLoader', () => {
    const cardLoader = screen.getByTestId('card-loader');

    expect(cardLoader).toBeInTheDocument();
  });
});
