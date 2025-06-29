import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface PokemonLimitContextType {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

export const PokemonLimitContext = createContext<
  PokemonLimitContextType | undefined
>(undefined);
