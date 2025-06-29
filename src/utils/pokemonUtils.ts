import typeWeaknesses from '@/constants/typeWeaknesses';
import type { Pokemon, Ability, GenderPercentage } from '@/types/pokemon';

type PokemonType = keyof typeof typeWeaknesses;

export const getPokemonImage = (pokemon: Pokemon): string => {
  if (pokemon.sprites?.other.dream_world?.front_default !== null) {
    return pokemon.sprites?.other?.dream_world?.front_default || '';
  } else {
    return pokemon.sprites.other['official-artwork'].front_default;
  }
};

export const calculateHeight = (heightInMeters: number): string => {
  const feet = (heightInMeters / 3.048).toFixed(2);
  const cm = (heightInMeters / 0.1).toFixed(2);
  return `${feet} feet (${cm} cm)`;
};

export const calculateWeight = (weightInKg: number): string => {
  const lbs = (weightInKg / 0.45359237).toFixed(2);
  const kg = weightInKg.toFixed(1);
  return `${lbs} lbs (${kg} kg)`;
};

export const formatAbilities = (abilities: Ability[]): string => {
  return abilities.map((ability) => ability.ability.name).join(', ');
};

export const calculateGenderPercentage = (
  genderRate: number,
): GenderPercentage => {
  const malePercentage = (genderRate * -100) / 8 + 100;
  const femalePercentage = (genderRate * 100) / 8;
  return {
    male: `${malePercentage.toFixed(2)}%`,
    female: `${femalePercentage.toFixed(2)}%`,
  };
};

export const calculateWeaknesses = (types: string[]): string[] => {
  const weaknesses = new Set<string>();
  types.forEach((type) => {
    if (type in typeWeaknesses) {
      const pokemonType = type as PokemonType;
      typeWeaknesses[pokemonType].forEach((weakness: string) =>
        weaknesses.add(weakness),
      );
    }
  });
  return Array.from(weaknesses);
};
