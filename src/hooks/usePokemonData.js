import { useState, useEffect } from 'react';
import useFetchPokemonData from './useFetchPokemonData'
import useFetchEvolutionData from './useFetchEvolutionData';
import { getPokemonImage } from '../utils/pokemonUtils';

const usePokemonData = (name) => {
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        types: [],
        background: '',
        picture: '',
    });

    const pokemonData = useFetchPokemonData(name);
    const evolutionData = useFetchEvolutionData(pokemonData?.species?.evolution_chain?.url)

    useEffect(() => {
        if(pokemonData) {
            setPokemon(prevState => ({
                ...prevState,
                name: pokemonData.name,
                id: pokemonData.id,
                types: pokemonData.types.map(type => type.name),
                background: pokemonData.types[0].name,
                picture: getPokemonImage(pokemonData),
                evolution: [],
            }))
        }
    }, [pokemonData]);

    useEffect(() => {
        console.log('Evoluções:', evolutionData);
        if(evolutionData) {
            setPokemon(prevState => ({
                ...prevState,
                evolution: evolutionData.map(evolution => ({
                    name: evolution.name,
                    picture: evolution.photo,
                    types: evolution.types,
                }))
            }))
        }
    }, [evolutionData, name]);

    return pokemon;
};

export default usePokemonData;