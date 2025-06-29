import { useContext } from 'react';
import { PokemonContext } from '@/contexts/PokemonContext';

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon deve ser usado dentro de um PokemonProvider');
  }
  return context;
};
