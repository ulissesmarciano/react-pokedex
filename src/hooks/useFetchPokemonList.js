import { useState, useEffect } from 'react';
import api from '../services/api'; // Importe seu serviço de API aqui

const useFetchPokemonList = (limit) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await api.get(`/pokemon?limit=${limit}`);
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, [limit]);

  return pokemonList;
};

export default useFetchPokemonList;