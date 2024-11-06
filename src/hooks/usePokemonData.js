import { useState, useEffect } from 'react';
import useFetchPokemonData from './useFetchPokemonData'
import useFetchEvolutionData from './useFetchEvolutionData';

const usePokemonData = (name) => {
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
    });

    const pokemonData = useFetchPokemonData(name);
    const evolutionData = useFetchEvolutionData(pokemonData?.species?.evolution_chain?.url)

    useEffect(() => {
        if(pokemonData) {
            setPokemon(prevState => ({
                ...prevState,
                name: pokemonData.name,
                id: pokemonData.id,
            }))
        }
    }, [pokemonData])

    return pokemon;
};

export default usePokemonData;