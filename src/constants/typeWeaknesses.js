const typeWeaknesses = {
    normal: ['fighting'],
    water: ['electric', 'grass'],
    grass: ['fire', 'ice', 'flying', 'poison', 'bug'],
    fire: ['water', 'ground', 'rock'],
    fighting: ['flying', 'psychic', 'fairy'],
    psychic: ['ghost', 'dark', 'bug'],
    ghost: ['ghost', 'dark'],
    dark: ['fighting', 'fairy', 'bug'],
    fairy: ['steel', 'poison'],
    flying: ['electric', 'rock', 'ice'],
    bug: ['fire', 'flying'],
    rock: ['fighting', 'water', 'grass', 'ground', 'steel'],
    ground: ['water', 'grass', 'ice'],
    ice: ['fighting', 'fire', 'rock', 'steel'],
    steel: ['fire', 'fighting', 'ground'],
    poison: ['psychic', 'ground'],
    electric: ['ground'],
    dragon: ['dragon', 'fairy', 'ice']
  };

  export default typeWeaknesses;