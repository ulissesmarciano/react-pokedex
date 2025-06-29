import { useState, useEffect } from "react";
import api from "@/services/api";
import { usePokemonLimit } from "@/hooks/usePokemonLimit";
import { PokemonContext } from "@/contexts/PokemonContext";
import type {
  PokemonProviderProps,
  PokemonResult,
} from "@/types/pokemonProvider";
import type { Pokemon } from "@/types/pokemon";

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const { limit } = usePokemonLimit();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      try {
        const response = await api.get<{ results: PokemonResult[] }>(
          `/pokemon?limit=${limit}`
        );
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: PokemonResult) => {
            const { id, types, sprites } = await fetchMoreInfo(pokemon.url);
            return {
              name: pokemon.name,
              id,
              types,
              sprites,
            };
          })
        );

        setPokemons(payloadPokemons);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os Pokémons");
      } finally {
        setLoading(false);
      }
    };

    const fetchMoreInfo = async (url: string) => {
      const response = await api.get(url);
      const { id, types, sprites } = response.data;

      const transformedTypes = types.map(
        (type: { type: { name: string } }) => ({
          name: type.type.name,
        })
      );

      return {
        id,
        types: transformedTypes,
        sprites,
      };
    };

    fetchAllPokemons();
  }, [limit]);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};
