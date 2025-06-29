import { useContext } from 'react';
import {
  PokemonLimitContext,
  type PokemonLimitContextType,
} from '@/contexts/PokemonLimitContext';

export const usePokemonLimit = (): PokemonLimitContextType => {
  const context = useContext(PokemonLimitContext);
  if (!context) {
    throw new Error(
      'usePokemonLimit deve ser usado dentro de um PokemonLimitProvider',
    );
  }
  return context;
};
