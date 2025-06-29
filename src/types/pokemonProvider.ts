import type { ReactNode } from 'react';

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface PokemonResult {
  name: string;
  url: string;
}
