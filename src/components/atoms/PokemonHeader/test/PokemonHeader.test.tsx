import PokemonHeader from '@/components/atoms/PokemonHeader/PokemonPageLoader';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

describe('PokemonHeader', () => {
  beforeEach(() =>
    render(
      <MemoryRouter>
        <PokemonHeader />
      </MemoryRouter>,
    ),
  );

  it('should render the header', () => {
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should have the link for home', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
