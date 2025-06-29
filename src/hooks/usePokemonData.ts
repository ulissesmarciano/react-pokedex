import { useState, useEffect, useMemo, useRef } from 'react';
import useFetchPokemonData from '@/hooks/useFetchPokemonData';
import useFetchEvolutionData from '@/hooks/useFetchEvolutionData';
import {
  getPokemonImage,
  calculateWeaknesses,
  calculateHeight,
  calculateWeight,
  calculateGenderPercentage,
  formatAbilities,
} from '@/utils/pokemonUtils';

import type {
  PokemonData,
  EvolutionData,
  PokemonState,
  EvolutionState,
} from '@/types/pokemonData';

const usePokemonData = (name: string | undefined): PokemonState | null => {
  const [pokemon, setPokemon] = useState<PokemonState | null>(null);

  const lastProcessedPokemon = useRef<string>('');
  const lastProcessedEvolution = useRef<string>('');
  const renderCount = useRef(0);
  renderCount.current++;

  const pokemonName = useMemo(() => name?.trim() || '', [name]);

  const pokemonData = useFetchPokemonData({
    pokemonName: pokemonName,
  }) as PokemonData | null;

  const evolutionData: EvolutionData[] = useFetchEvolutionData(
    pokemonData?.species?.evolution_chain?.url || '',
  );

  const pokemonDataHash = useMemo(() => {
    if (!pokemonData) return '';
    return `${pokemonData.name}-${pokemonData.id}`;
  }, [pokemonData]);

  const evolutionDataHash = useMemo(() => {
    if (!evolutionData || !Array.isArray(evolutionData)) return '';
    return evolutionData.map((e) => e.name).join('-');
  }, [evolutionData]);

  useEffect(() => {
    if (
      pokemonName &&
      pokemonData &&
      pokemonDataHash !== lastProcessedPokemon.current
    ) {
      lastProcessedPokemon.current = pokemonDataHash;

      const newPokemon: PokemonState = {
        name: pokemonData.name,
        id: String(pokemonData.id),
        types: pokemonData.types?.map((type) => type.name) || [],
        background: pokemonData.types?.[0]?.name || '',
        picture: getPokemonImage(pokemonData),
        evolution: [],
        weaknesses: calculateWeaknesses(
          pokemonData.types?.map((type) => type.name) || [],
        ),
        height: calculateHeight(pokemonData.height),
        weight: calculateWeight(pokemonData.weight),
        gender: '',
        abilities: formatAbilities(pokemonData.abilities),
        male: calculateGenderPercentage(pokemonData.species?.gender_rate || 0)
          .male,
        female: calculateGenderPercentage(pokemonData.species?.gender_rate || 0)
          .female,
        eggGroup: pokemonData.species?.egg_groups?.[0]?.name || '',
        eggCycle: pokemonData.species?.egg_groups?.[1]?.name || 'Dont Have',
        stats: {
          hp: pokemonData.stats?.[0]?.base_stat || 0,
          attack: pokemonData.stats?.[1]?.base_stat || 0,
          defense: pokemonData.stats?.[2]?.base_stat || 0,
          spAtk: pokemonData.stats?.[3]?.base_stat || 0,
          spDef: pokemonData.stats?.[4]?.base_stat || 0,
          speed: pokemonData.stats?.[5]?.base_stat || 0,
          total:
            pokemonData.stats
              ?.map((stat) => stat.base_stat)
              .reduce((prev, curr) => prev + curr, 0) || 0,
        },
        move: pokemonData.moves?.[0]?.move?.name || '',
        story:
          pokemonData.species?.flavor_text_entries?.find(
            (entry) => entry.language.name === 'en',
          )?.flavor_text || '',
      };

      if (evolutionData && evolutionData.length > 0) {
        newPokemon.evolution = evolutionData.map(
          (evolution): EvolutionState => ({
            name: evolution.name,
            picture: evolution.photo || '',
            types: evolution.types || [],
          }),
        );
        lastProcessedEvolution.current = evolutionDataHash;
      }

      setPokemon(newPokemon);
    } else if (
      pokemon &&
      evolutionData &&
      evolutionData.length > 0 &&
      evolutionDataHash !== lastProcessedEvolution.current
    ) {
      lastProcessedEvolution.current = evolutionDataHash;

      setPokemon((prevState) => {
        if (!prevState) return null;
        return {
          ...prevState,
          evolution: evolutionData.map(
            (evolution): EvolutionState => ({
              name: evolution.name,
              picture: evolution.photo || '',
              types: evolution.types || [],
            }),
          ),
        };
      });
    } else if (!pokemonName && pokemon) {
      setPokemon(null);
      lastProcessedPokemon.current = '';
      lastProcessedEvolution.current = '';
    }
  }, [
    pokemonName,
    pokemonDataHash,
    evolutionDataHash,
    pokemon,
    pokemonData,
    evolutionData,
  ]);

  useEffect(() => {
    if (pokemonName !== lastProcessedPokemon.current.split('-')[0]) {
      lastProcessedPokemon.current = '';
      lastProcessedEvolution.current = '';
    }
  }, [pokemonName]);

  return pokemon;
};

export default usePokemonData;
