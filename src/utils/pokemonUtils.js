import typeWeaknesses from "../constants/typeWeaknesses";

export const getPokemonImage = (pokemon) => {
  if (pokemon.sprites?.other.dream_world?.front_default !== null) {
    return pokemon.sprites?.other?.dream_world?.front_default;
  } else {
    return pokemon.sprites.other["official-artwork"].front_default;
  }
};

export const calculateHeight = (heightInMeters) => {
  const feet = (heightInMeters / 3.048).toFixed(2);
  const cm = (heightInMeters / 0.1).toFixed(2);
  return `${feet} feet (${cm} cm)`;
};

export const calculateWeight = (weightInKg) => {
  const lbs = (weightInKg / 0.45359237).toFixed(2);
  const kg = weightInKg.toFixed(1);
  return `${lbs} lbs (${kg} kg)`;
};

export const formatAbilities = (abilities) => {
  return abilities.map((ability) => ability.ability.name).join(", ");
};

export const calculateGenderPercentage = (genderRate) => {
  const malePercentage = (genderRate * -100) / 8 + 100;
  const femalePercentage = (genderRate * 100) / 8;
  return {
    male: `${malePercentage.toFixed(2)}%`,
    female: `${femalePercentage.toFixed(2)}%`,
  };
};

export const calculateWeaknesses = (types) => {
  const weaknesses = new Set();
  types.forEach((type) => {
    if (typeWeaknesses[type]) {
      typeWeaknesses[type].forEach((weakness) => weaknesses.add(weakness));
    }
  });
  return Array.from(weaknesses);
};
