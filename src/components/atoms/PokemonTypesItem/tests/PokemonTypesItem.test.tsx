import PokemonTypesItem from '@/components/atoms/PokemonTypesItem/PokemonTypesItem';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('PokemonTypesItem', () => {
  it('should render the component name', () => {
    render(<PokemonTypesItem typeBackground="normal" typeName="normal" />);

    const typeItem = screen.getByText('normal');
    expect(typeItem).toBeInTheDocument();
  });
});
