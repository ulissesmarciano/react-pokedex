export interface PokemonData {
  name: string;
  id: number;
  types: Array<{ name: string }>;
  sprites: {
    other: {
      dream_world?: {
        front_default: string | null;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  species: {
    evolution_chain: {
      url: string;
    };
    gender_rate: number;
    egg_groups: Array<{ name: string }>;
    flavor_text_entries: Array<{
      language: { name: string };
      flavor_text: string;
    }>;
  };
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{ base_stat: number }>;
  moves: Array<{
    move: { name: string };
  }>;
}

export interface EvolutionData {
  name: string;
  types: string[] | null;
  photo: string | null;
}

export interface EvolutionState {
  name: string;
  picture: string;
  types: string[];
}

export interface PokemonState {
  name: string;
  id: string;
  types: string[];
  background: string;
  picture: string;
  evolution: EvolutionState[];
  weaknesses: string[];
  height: string;
  weight: string;
  gender: string;
  abilities: string;
  male: string;
  female: string;
  eggGroup: string;
  eggCycle: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
    total: number;
  };
  move: string;
  story: string;
}
