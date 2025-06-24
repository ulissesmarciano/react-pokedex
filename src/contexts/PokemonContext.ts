import { createContext } from "react";

interface Pokemon {
    name: string;
    id: number;
    types: unknown[];
    sprites: unknown;
}

interface PokemonsContextType {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null;
}

export const PokemonContext = createContext<PokemonsContextType | undefined>(undefined);

