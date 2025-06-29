import { createContext } from "react";
import type { PokemonsContextType } from "@/types/pokemon";

export const PokemonContext = createContext<PokemonsContextType | undefined>(
  undefined
);
