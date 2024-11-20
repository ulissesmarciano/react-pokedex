import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import usePokemonData from '../../hooks/usePokemonData';
import { usePokemonLimit } from '../../contexts/PokemonLimitContext';
import useFetchPokemonList from '../../hooks/useFetchPokemonList';

import PokemonPageLoader from '../../components/pokemon-page-loader';
import PokemonHeader from '../../components/pokemon-header';
import PokemonTypesItem from '../../components/pokemon-types-item';
import InfoTabList from '../../components/info-tab-list'
import EvolutionItemList from '../../components/evolution-item-list';

import PokebalImage from '../../assets/icons/pokeball-icon.svg';



const Pokemon = () => {
  const { name } = useParams();
  const { limit } = usePokemonLimit();
  const pokemonList = useFetchPokemonList(limit);

  const pokemon = usePokemonData(name)

  if (!pokemon || pokemonList.length === 0) {
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

  const LeftArrow = pokemon.id < 10 ? `0${pokemon.id - 1}` : `${pokemon.id - 1}`
  const RightArrow = pokemon.id < 10 ? `0${pokemon.id + 1}` : `${pokemon.id + 1}`

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  const lowercaseName = pokemon.name;
  const captalizeName = capitalizeFirstLetter(lowercaseName);

  console.log(pokemon.abilities)

  return (<>
    <PokemonHeader />
    <Container>
      <aside className='number-page-container left'>
        <Link to={`/pokemon/${getPrevPokemonName()}`}>
          <SlArrowLeft />
          {LeftArrow}
        </Link>
      </aside >
      <section className='left-side-section'>
        <div className='pokemon-name-section'>
          <h4>{pokemon.name}</h4>
          <p>#{pokemon.id < 10 ? `0${pokemon.id}` : `${pokemon.id}`}</p>
        </div>
        <div className='skills-container'>
          <ul>
            {pokemon.types.map((type, index) => (
              <PokemonTypesItem
                key={index}
                typeBackground={type}
                typeName={type}
              />
            ))}
          </ul>
        </div>
        <div className={`${pokemon.background} pokemon-image-section`}>
          <figure className='pokemon-image'>
            <img
              src={pokemon.picture}
              alt={`Foto do pokémon ${pokemon.name}`}
            />
          </figure>
          <figure className='pokeball-image'>
            <img
              src={PokebalImage}
              alt='animação de pokébola girando atrás da foto'
            />
          </figure>
        </div>
        <div className='evolution-container'>
          <h6>Evolutions</h6>
          <div className='evolution-image-container'>
            {pokemon?.evolution?.map((evolution, index) => (
              <EvolutionItemList
                key={index}
                to={`/pokemon/${evolution.name}`}
                src={evolution.picture}
                alt={`foto da evolução ${evolution.name}`}
                className={evolution.types[0]}
                pokemonName={evolution.name}
                type={evolution?.types?.map((name, index) => (
                  <PokemonTypesItem
                    key={index}
                    typeBackground={name}
                    typeName={name}
                  />
                ))}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='right-side-section'>
        <div className='info-tab-list-container'>
          <InfoTabList
            pokemonName={captalizeName}
            pokemonType={pokemon.types[0]}
            pokemonHP={pokemon.stats.hp}
            pokemonSpeed={pokemon.stats.speed}
            pokemonAbility={pokemon.abilities}
            pokemonMove={pokemon.move}
            weakness={pokemon.weaknesses.map((weakness, index) => (
              <PokemonTypesItem
                key={index}
                typeBackground={weakness}
                typeName={weakness}
              />
            ))}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            malePercentage={pokemon.male}
            femalePercentage={pokemon.female}
            eggGroup={pokemon.eggGroup}
            eggCycle={pokemon.eggCycle}
            hp={pokemon.stats.hp}
            attack={pokemon.stats.attack}
            defense={pokemon.stats.defense}
            spAtk={pokemon.stats.spAtk}
            spDef={pokemon.stats.spDef}
            speed={pokemon.stats.speed}
            total={pokemon.stats.total}
          />
        </div>
      </section>
      <aside className='number-page-container right'>
        {getNextPokemonName() && (
          <Link to={`/pokemon/${getNextPokemonName()}`}>
            {RightArrow}
            <SlArrowRight />
          </Link>
        )}
      </aside>
    </Container>
  </>)
};

export default Pokemon;
