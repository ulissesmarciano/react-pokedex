import { useState, useEffect } from 'react';
import useFetchPokemonData from './useFetchPokemonData'
import useFetchEvolutionData from './useFetchEvolutionData';
import { 
    getPokemonImage, 
    calculateWeaknesses,
    calculateHeight,
    calculateWeight,
    calculateGenderPercentage,
    formatAbilities 
} from '../utils/pokemonUtils';


const usePokemonData = (name) => {
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        types: [],
        background: '',
        picture: '',
        evolution: [],
        weaknesses: [],
        height: '',
        weight: '',
        gender: '',
        abilities: [],
        eggGroup:  '',
        eggCycle: '',
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
                weaknesses: calculateWeaknesses(pokemonData.types.map(type => type.name)),
                height: calculateHeight(pokemonData.height),
                weight: calculateWeight(pokemonData.weight),
                abilities: formatAbilities(pokemonData.abilities),
                male: calculateGenderPercentage(pokemonData.species.gender_rate).female,
                female: calculateGenderPercentage(pokemonData.species.gender_rate).male,
                eggGroup: pokemonData.species.egg_groups[0]?.name || '',
                eggCycle: pokemonData.species.egg_groups[1]?.name || 'Dont Have',
            }))
        }
    }, [pokemonData]);

    useEffect(() => {
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