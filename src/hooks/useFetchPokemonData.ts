import { useState, useEffect } from "react";
import api from "@/services/api";

// CORREÇÃO: Interface renomeada para evitar conflito
interface FetchPokemonParams {
  pokemonName: string;
}

// CORREÇÃO: Parâmetro tipado corretamente
const useFetchPokemonData = ({ pokemonName }: FetchPokemonParams) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // CORREÇÃO: Verificar se pokemonName não está vazio
      if (!pokemonName || pokemonName.trim() === "") {
        setPokemonData(null);
        return;
      }

      try {
        const response = await api.get(`/pokemon/${pokemonName}`);
        const pokemon = response.data;

        const speciesResponse = await api.get(pokemon.species.url);
        const speciesData = speciesResponse.data;

        const evolutionChainResponse = await api.get(
          speciesData.evolution_chain.url
        );
        const evolutionChainData = evolutionChainResponse.data;

        const typesData = await Promise.all(
          pokemon.types.map(
            async (type: { type: { url: string; name: string } }) => {
              const typeResponse = await api.get(type.type.url);
              const typeData = typeResponse.data;

              return {
                name: typeData.name,
              };
            }
          )
        );

        setPokemonData({
          ...pokemon,
          species: speciesData,
          evolution_chain: evolutionChainData,
          types: typesData,
        });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setPokemonData(null);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return pokemonData;
};

export default useFetchPokemonData;
