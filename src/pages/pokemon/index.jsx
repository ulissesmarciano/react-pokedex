import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

import { usePokemonLimit } from '../../contexts/PokemonLimitContext';
import useFetchPokemonData from '../../hooks/useFetchPokemonData';
import useFetchPokemonList from '../../hooks/useFetchPokemonList';
import useFetchEvolutionData from '../../hooks/useFetchEvolutionData';
import { 
  getPokemonImage,
  calculateGenderPercentage,
  calculateHeight,
  calculateWeight,
  formatAbilities
} from '../../utils/pokemonUtils';

import typeWeaknesses from '../../constants/typeWeaknesses'
import PokemonPageLoader from '../../components/pokemon-page-loader';
import PokemonHeader from '../../components/pokemon-header';
import PokemonTypesItem from '../../components/pokemon-types-item';
import InfoTabList from '../../components/info-tab-list'
import EvolutionItemList from '../../components/evolution-item-list';

import PokebalImage from '../../assets/icons/pokeball-icon.svg';



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

  return (<>
    <PokemonHeader />
    <Container>
      <aside className='number-page-container'>
        <Link to={`/pokemon/${getPrevPokemonName()}`}>
          #{(pokemonData.id < 10 ? `0${pokemonData.id - 1}` : `${pokemonData.id - 1}`)}
        </Link>
      </aside >
      <section className='left-side-section'>
        <section className='pokemon-name-section'>
          <h4>{pokemonData.name}</h4>
          <p>#{pokemonData.id < 10 ? `0${pokemonData.id}` : `${pokemonData.id}`}</p>
        </section>
        <section className='skills-container'>
          <ul>
            {pokemonData.types.map((type, index) => (
              <PokemonTypesItem 
                key={index}
                typeBackground={type.name}
                typeName={type.name}
              />
            ))}
          </ul>
        </section>
        <section className={`${pokemonData.types[0].name} pokemon-image-section`}>
          <figure className='pokemon-image'>
            <img
              src={getPokemonImage(pokemonData)}
              alt={`Foto do pokémon ${pokemonData.name}`}
            />
          </figure>
          <figure className='pokeball-image'>
            <img
              src={PokebalImage}
              alt='animação de pokébola girando atrás da foto'
            />
          </figure>
        </section>
        <section className='evolution-container'>
          <h6>Evolutions</h6>
          <div className='evolution-image-container'>
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
          </div>
        </section>
      </section>
      <section className='right-side-section'>
        <section className='info-tab-list-container'>
          <InfoTabList
            weakness={weaknesses.map((weakness, index) => (
              <PokemonTypesItem
                key={index}
                typeBackground={weakness}
                typeName={weakness}
              />
            ))}
            height={calculateHeight(pokemonData.height)}
            weight={calculateWeight(pokemonData.weight)}
            abilities={formatAbilities(pokemonData.abilities)}
            malePercentage={calculateGenderPercentage(pokemonData.species.gender_rate).female}
            femalePercentage={calculateGenderPercentage(pokemonData.species.gender_rate).male}
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
        </section>
      </section>
      <aside className='number-page-container'>
        {getNextPokemonName() && (
          <Link to={`/pokemon/${getNextPokemonName()}`}>
            #{pokemonData.id < 10 ? `0${pokemonData.id + 1}` : `${pokemonData.id + 1}`}
          </Link>
        )}
      </aside>
    </Container>
  </>)
};

export default Pokemon;
