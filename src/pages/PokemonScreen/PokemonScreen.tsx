import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

import usePokemonData from '@/hooks/usePokemonData';
import { usePokemon } from '@/hooks/usePokemon';

import PokemonPageLoader from '@/components/atoms/PokemonPageLoader/PokemonPageLoader';
import PokemonHeader from '@/components/atoms/PokemonHeader/PokemonPageLoader';
import PokemonTypesItem from '@/components/atoms/PokemonTypesItem/PokemonTypesItem';
import InfoTabList from '@/components/organism/InfoTabList/InfoTabList';
import EvolutionItemList from '@/components/atoms/EvolutionItemList/EvolutionItemList';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import PokebalImage from '@/assets/icons/pokeball-icon.svg';

const PokemonScreen = () => {
  const { name } = useParams<{ name: string }>();
  const { pokemons } = usePokemon();

  const pokemon = usePokemonData(name);

  if (!name || !pokemon || pokemons.length === 0) {
    return (
      <>
        <PokemonHeader />
        <PokemonPageLoader />
      </>
    );
  }

  const getNextPokemonName = () => {
    const currentIndex = pokemons.findIndex((pokemon) => pokemon.name === name);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % pokemons.length;
    return pokemons[nextIndex].name;
  };

  const getPrevPokemonName = () => {
    const currentIndex = pokemons.findIndex((pokemon) => pokemon.name === name);
    if (currentIndex === -1) return null;
    const prevIndex = (currentIndex - 1 + pokemons.length) % pokemons.length;
    return pokemons[prevIndex].name;
  };

  const LeftArrow =
    Number(pokemon.id) < 10
      ? `0${Number(pokemon.id) - 1}`
      : `${Number(pokemon.id) - 1}`;
  const RightArrow =
    Number(pokemon.id) < 10
      ? `0${Number(pokemon.id) + 1}`
      : `${Number(pokemon.id) + 1}`;

  return (
    <>
      <PokemonHeader />
      <Container>
        <div className="number-page-container left">
          <Link to={`/pokemon/${getPrevPokemonName()}`}>
            <SlArrowLeft />
            {LeftArrow}
          </Link>
        </div>
        <section className="left-side-section">
          <div className="pokemon-name-section">
            <h4>{pokemon.name}</h4>
            <p>
              #{Number(pokemon.id) < 10 ? `0${pokemon.id}` : `${pokemon.id}`}
            </p>
          </div>
          <div className="skills-container">
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
            <figure className="pokemon-image">
              <img
                src={pokemon.picture}
                alt={`Foto do pokémon ${pokemon.name}`}
              />
            </figure>
            <figure className="pokeball-image">
              <img
                src={PokebalImage}
                alt="animação de pokébola girando atrás da foto"
              />
            </figure>
          </div>
          <div className="evolution-container">
            <h6>Evolutions</h6>
            <div className="evolution-image-container">
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
        <section className="right-side-section">
          <div className="info-tab-list-container">
            <InfoTabList
              story={pokemon.story ? pokemon.story : 'No story'}
              weakness={pokemon.weaknesses}
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
        <div className="number-page-container right">
          {getNextPokemonName() && (
            <Link to={`/pokemon/${getNextPokemonName()}`}>
              {RightArrow}
              <SlArrowRight />
            </Link>
          )}
        </div>
      </Container>
    </>
  );
};

export default PokemonScreen;
