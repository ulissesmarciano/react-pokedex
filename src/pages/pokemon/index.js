import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePokemonLimit } from '../../contexts/PokemonLimitContext';
import useFetchPokemonData from '../../hooks/useFetchPokemonData';
import useFetchPokemonList from '../../hooks/useFetchPokemonList';
import useFetchEvolutionData from '../../hooks/useFetchEvolutionData';
import PokemonHeader from '../../components/pokemon-header';
import PokemonPageLoader from '../../components/pokemon-page-loader';
import PokemonTypesItem from '../../components/pokemon-types-item';
import PokebalImage from '../../assets/icons/pokeball-icon.svg';
import InfoTabList from '../../components/info-tab-list'
import {
  Container,
  EvolutionContainer,
  EvolutionImageContainer,
  InfoTabListContainer,
  LeftSideSection,
  NumberPageContainer,
  PokemonImageContainer,
  PokemonNameContainer,
  RightSideSection,
  SkillContainer
} from './styles';
import EvolutionItemList from '../../components/evolution-item-list';

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

const Pokemon = () => {
  const { name } = useParams();
  const { limit } = usePokemonLimit();
  const pokemonData = useFetchPokemonData(name);
  const pokemonList = useFetchPokemonList(limit);
  const evolutionDataList = useFetchEvolutionData(pokemonData?.species?.evolution_chain?.url);

  if (!pokemonData || pokemonList.length === 0) {
    return (
      <>
        <PokemonHeader />
        <PokemonPageLoader />
      </>
    );
  }

  const getNextPokemonName = () => {
    const currentIndex = pokemonList.findIndex(pokemon => pokemon.name === name);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % pokemonList.length;
    return pokemonList[nextIndex].name;
  };

  const getPrevPokemonName = () => {
    const currentIndex = pokemonList.findIndex(pokemon => pokemon.name === name);
    if (currentIndex === -1) return null;
    const prevIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
    return pokemonList[prevIndex].name;
  };

  const calculateWeaknesses = (types) => {
    const weaknesses = new Set();
    types.forEach((type) => {
      if (typeWeaknesses[type]) {
        typeWeaknesses[type].forEach((weakness) => weaknesses.add(weakness));
      }
    });
    return Array.from(weaknesses);
  };

  const weaknesses = calculateWeaknesses(pokemonData.types.map(type => type.name));

  return (
    <Container>
      <PokemonHeader />
      <NumberPageContainer>
        <Link to={`/pokemon/${getPrevPokemonName()}`}>
          #{(pokemonData.id < 10 ? `0${pokemonData.id - 1}` : `${pokemonData.id - 1}`)}
        </Link>
      </NumberPageContainer>
      <LeftSideSection>
        <PokemonNameContainer>
          <h4>{pokemonData.name}</h4>
          <p>#{pokemonData.id < 10 ? `0${pokemonData.id}` : `${pokemonData.id}`}</p>
        </PokemonNameContainer>
        <SkillContainer>
          <ul>
            {pokemonData.types.map((type, index) => (
              <PokemonTypesItem 
                key={index}
                typeBackground={type.name}
                typeName={type.name}
              />
            ))}
          </ul>
        </SkillContainer>
        <PokemonImageContainer className={pokemonData.types[0].name}>
          <img
            className='pokemon-image'
            src={pokemonData.sprites.other.dream_world.front_default === null ? pokemonData.sprites.other['official-artwork'].front_default : pokemonData.sprites.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemonData.name}`}
          />
          <img
            className='pokeball-image'
            src={PokebalImage}
            alt='animação de pokébola girando atrás da foto'
          />
        </PokemonImageContainer>
        <EvolutionContainer>
          <h6>Evolutions</h6>
          <EvolutionImageContainer>
            {evolutionDataList.map((evolution, index) => (
              <EvolutionItemList 
                key={index}
                to={`/pokemon/${evolution.Name}`}
                src={evolution.Photo}
                alt={`foto da evolução ${evolution.Name}`}
                className={evolution.Types[0]}
                pokemonName={evolution.Name}
                type={evolution.Types.map((name, index) => (
                  <PokemonTypesItem 
                    key={index}
                    typeBackground={name}
                    typeName={name}
                    />
                ))}
              />
            ))}
          </EvolutionImageContainer>
        </EvolutionContainer>
      </LeftSideSection>
      <RightSideSection>
        <InfoTabListContainer>
          <InfoTabList
            weakness={weaknesses.map((weakness, index) => (
              <PokemonTypesItem
                key={index}
                typeBackground={weakness}
                typeName={weakness}
              />
            ))}
            height={`${(pokemonData.height / 3.048).toFixed(2)} feet (${(pokemonData.height / 10).toFixed(2)} cm)`}
            weight={`${(pokemonData.weight / 4.436).toFixed(2)} lbs (${(pokemonData.weight / 10).toFixed(1)} kg)`}
            abilities={pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}
            malePercentage={`${((pokemonData.species.gender_rate * -100) / 8) + 100}%`}
            femalePercentage={`${((pokemonData.species.gender_rate * 100) / 8)}%`}
            eggGroup={pokemonData.species.egg_groups[0]?.name || ''}
            eggCycle={pokemonData.species.egg_groups[1]?.name || 'Dont Have'}
            hp={pokemonData.stats[0].base_stat}
            attack={pokemonData.stats[1].base_stat}
            defense={pokemonData.stats[2].base_stat}
            spAtk={pokemonData.stats[3].base_stat}
            spDef={pokemonData.stats[4].base_stat}
            speed={pokemonData.stats[5].base_stat}
            total={pokemonData.stats.map((base) => base.base_stat).reduce((prev, curr) => prev + curr)}
          />
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        {getNextPokemonName() && (
          <Link to={`/pokemon/${getNextPokemonName()}`}>
            #{pokemonData.id < 10 ? `0${pokemonData.id + 1}` : `${pokemonData.id + 1}`}
          </Link>
        )}
      </NumberPageContainer>
    </Container>
  );
};

export default Pokemon;
