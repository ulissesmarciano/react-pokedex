import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children, limit = 300 }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/pokemon?limit=${limit}`);
                const { results } = response.data;

                const payloadPokemons = await Promise.all(
                    results.map(async (pokemon) => {
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

        const fetchMoreInfo = async (url) => {
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
