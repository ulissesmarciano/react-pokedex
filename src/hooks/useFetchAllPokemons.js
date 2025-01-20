import { useState, useEffect } from "react";
import api from "../services/api";

const useFetchAllPokemons = (limit = 300) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await api.get(`/pokemon?limit=${limit}`);
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon) => {
            const { id, types, sprites } = await getMoreInfo(pokemon.url);
            return {
              name: pokemon.name,
              id,
              types,
              sprites,
            };
          })
        );
        setPokemons(payloadPokemons);
      } catch (err) {
        setError("Erro ao carregar os Pokémons");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const getMoreInfo = async (url) => {
      const response = await api.get(url);
      const { id, types, sprites } = response.data;
      return { id, types, sprites };
    };

    getAllPokemons();
  }, [limit]);

  return { pokemons, loading, error };
};

export default useFetchAllPokemons;
