import PokedexHeader from '@/components/atoms/PokedexHeader/PokedexHeader';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

describe('PokedexHeader', () => {
  beforeEach(() =>
    render(
      <MemoryRouter>
        <PokedexHeader />
      </MemoryRouter>,
    ),
  );

  it('should render the header', () => {
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should render the header and image', () => {
    const image = screen.getByAltText('icone da homepage');
    expect(image).toBeInTheDocument();
  });

  it('should have the link for home', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
