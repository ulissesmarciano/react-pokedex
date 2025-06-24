import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import api from "@/services/api";
import { usePokemonLimit } from "@/hooks/usePokemonLimt";
import { PokemonContext } from "@/contexts/PokemonContext";

interface PokemonProviderProps {
    children: ReactNode;
    setError: string;
    url: string;
}

interface PokemonResult {
  name: string;
  url: string;
}


export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const { limit } = usePokemonLimit();
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setLoading(true);
            try {
                const response = await api.get<{results: PokemonResult[]}>(`/pokemon?limit=${limit}`);
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
            return { id, types, sprites };
        };

        fetchAllPokemons();
    }, [limit]);

    return (
        <PokemonContext.Provider value={{ pokemons, loading, error }}>
            {children}
        </PokemonContext.Provider>
    );
};
