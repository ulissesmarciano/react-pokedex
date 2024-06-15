import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles';

import PokemonHeader from '../../components/pokemon-header';
import InfoTabList from '../../components/info-tab-list';
import EvolutionItemList from '../../components/evolution-item-list';
import PokemonPageLoader from '../../components/pokemon-page-loader';

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

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [evolutionImages, setEvolutionImages] = useState({});
  const [evolutionTypes, setEvolutionTypes] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  const { name } = useParams();

  const fetchPokemonData = async () => {
    try {
      const response = await api.get(`/pokemon/${name}`);
      const pokemon = response.data;

      const speciesResponse = await api.get(pokemon.species.url);
      const speciesData = speciesResponse.data;

      const evolutionChainResponse = await api.get(speciesData.evolution_chain.url);
      const evolutionChainData = evolutionChainResponse.data;

      const typesData = await Promise.all(pokemon.types.map(async (type) => {
        const typeResponse = await api.get(type.type.url);
        return typeResponse.data;
      }));

      setPokemonData({
        ...pokemon,
        species: speciesData,
        evolution_chain: evolutionChainData,
        types: typesData,
      });

      fetchEvolutionData(evolutionChainData.chain);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchPokemonList = async () => {
    try {
      const response = await api.get('/pokemon?limit=1000');
      setPokemonList(response.data.results);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const fetchEvolutionData = async (chain) => {
    const fetchImage = async (name) => {
      try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data.sprites.front_default;
      } catch (error) {
        console.error('Error fetching evolution image:', error);
        return null;
      }
    };

    const fetchPokemonTypes = async (name) => {
      try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data.types.map(type => type.type.name);
      } catch (error) {
        console.error('Error fetching Pokémon types:', error);
        return null;
      }
    };

    const images = {};
    const types = {};

    const fetchChainData = async (chain) => {
      images[chain.species.name] = await fetchImage(chain.species.name);
      types[chain.species.name] = await fetchPokemonTypes(chain.species.name);

      if (chain.evolves_to.length > 0) {
        for (const evo of chain.evolves_to) {
          images[evo.species.name] = await fetchImage(evo.species.name);
          types[evo.species.name] = await fetchPokemonTypes(evo.species.name);

          if (evo.evolves_to.length > 0) {
            for (const subEvo of evo.evolves_to) {
              images[subEvo.species.name] = await fetchImage(subEvo.species.name);
              types[subEvo.species.name] = await fetchPokemonTypes(subEvo.species.name);
            }
          }
        }
      }
    };

    await fetchChainData(chain);

    setEvolutionImages(images);
    setEvolutionTypes(types);
  };

  useEffect(() => {
    fetchPokemonData();
    fetchPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (!pokemonData || pokemonList.length === 0) {
    return (
      <>
        <PokemonHeader />
        <PokemonPageLoader />
      </>
    )
  }

  const getNextPokemonName = () => {
    const currentIndex = pokemonList.findIndex(pokemon => pokemon.name === name);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % pokemonList.length;
    return pokemonList[nextIndex].name;
  };

  const nextPokemonName = getNextPokemonName();

  const calculateWeaknesses = (types) => {
    const weaknesses = new Set();
    types.forEach((type) => {
      if (typeWeaknesses[type]) {
        typeWeaknesses[type].forEach((weakness) => weaknesses.add(weakness));
      }
    });
    return Array.from(weaknesses);
  };

  const weaknesses = calculateWeaknesses(pokemonData.types.map((type) => type.name));

  return (
    <Container>
      <PokemonHeader />
      {console.log(evolutionTypes)}
      <NumberPageContainer>
        <Link 
          to={`/pokemon/${pokemonData.id > 1 ? pokemonList[pokemonData.id - 2].name : pokemonData.name}`}
        >
          #{pokemonData.id < 10 ? `0${pokemonData.id - 1}` : `${pokemonData.id - 1}`}
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
              <li className={type.name} key={index}>{type.name}</li>
            ))}
          </ul>
        </SkillContainer>
        <PokemonImageContainer>
          <img className={pokemonData.types[0].name} src={pokemonData.sprites.other.dream_world.front_default === null ? pokemonData.sprites.other['official-artwork'].front_default : pokemonData.sprites.other.dream_world.front_default}
            alt={`Foto do pokémon ${pokemonData.name}`} />
        </PokemonImageContainer>
        <EvolutionContainer>
          <h6>Evolutions</h6>
          <EvolutionImageContainer>
            <>
            {['eevee', 'jolteon', 'vaporeon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'].includes(name.toLowerCase()) ? (
            pokemonData.evolution_chain.chain.evolves_to.map((evolution, index) => {
              const evolutionType = evolutionTypes[evolution.species.name];
              return (
                <EvolutionItemList 
                  key={index}
                  pokemonName={evolution.species.name}
                  src={evolutionImages[evolution.species.name]}
                  alt={`${evolution.species.name} sprite`}
                  type={evolutionType}
                  to={`/pokemon/${evolution.species.name}`}
                />
              );
            })
              ) : (
                <>
                  {pokemonData.evolution_chain.chain.is_baby === false && (
                    <EvolutionItemList
                      to={`/pokemon/${pokemonData.evolution_chain.chain.species.name}`}
                      pokemonName={pokemonData.evolution_chain.chain.species.name}
                      src={evolutionImages[pokemonData.evolution_chain.chain.species.name]}
                      alt={`${pokemonData.evolution_chain.chain.species.name} sprite`}
                      className={evolutionTypes[pokemonData.evolution_chain.chain.species.name] ? 
                        evolutionTypes[pokemonData.evolution_chain.chain.species.name][0] : ''}
                      type={evolutionTypes[pokemonData.evolution_chain.chain.species.name] && (
                        evolutionTypes[pokemonData.evolution_chain.chain.species.name].map((type, index) => (
                          <li 
                          key={index}
                          className={type}
                          >
                            {type}
                          </li>
                        ))
                      )}
                    />
                  )}
                  {pokemonData.evolution_chain.chain.evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].is_baby === false && (
                    <EvolutionItemList
                      to={`/pokemon/${pokemonData.evolution_chain.chain.evolves_to[0].species.name}`}
                      pokemonName={pokemonData.evolution_chain.chain.evolves_to[0].species.name}
                      src={evolutionImages[pokemonData.evolution_chain.chain.evolves_to[0].species.name]}
                      alt={`${pokemonData.evolution_chain.chain.evolves_to[0].species.name} sprite`}
                      className={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name] ? 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name][0] : ''}
                      type={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name] && (
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name].map((type, index) => (
                          <li 
                          key={index}
                          className={type}
                          >
                            {type}
                          </li>
                        ))
                      )}
                    />
                  )}
                  {pokemonData.evolution_chain.chain.evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].is_baby === false && (
                    <EvolutionItemList
                      to={`/pokemon/${pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name}`}
                      pokemonName={pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name}
                      src={evolutionImages[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name]}
                      alt={`${pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name} sprite`}
                      className={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name] ? 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name][0] : ''}
                      type={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name] && (
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name].map((type, index) => (
                          <li 
                          key={index}
                          className={type}
                          >
                            {type}
                          </li>
                        ))
                      )}
                    />
                  )}
                </>
              )}
            </>
          </EvolutionImageContainer>
        </EvolutionContainer>
      </LeftSideSection>
      <RightSideSection>
        <InfoTabListContainer>
          <InfoTabList

            //attributes
            weakness={weaknesses.map((weakness, index) => <li className={weakness} key={index}>{weakness}</li>)}
            height={`${(pokemonData.height / 3.048).toFixed(2)} feet (${(pokemonData.height / 10).toFixed(2)} cm)`}
            weight={`${(pokemonData.weight / 4.436).toFixed(2)} lbs (${(pokemonData.weight / 10).toFixed(1)} kg)`}
            abilities={pokemonData.abilities.map((ability) => ability.ability.name).reduce((prev, curr) => [prev, ', ', curr])}

            //breeding
            malePercentage={`${((pokemonData.species.gender_rate*-100)/8)+100}%`}
            femalePercentage={`${((pokemonData.species.gender_rate*100)/8)}%`}
            eggGroup={pokemonData.species.egg_groups[0]?.name || ''}
            eggCycle={pokemonData.species.egg_groups[1]?.name || 'Dont Have'}
            
            //stats
            hp={pokemonData.stats[0].base_stat}
            attack={pokemonData.stats[1].base_stat}
            defense={pokemonData.stats[2].base_stat}
            spAtk={pokemonData.stats[3].base_stat}
            spDef={pokemonData.stats[4].base_stat}
            speed={pokemonData.stats[5].base_stat}
            total={pokemonData.stats.map((base) => (base.base_stat)).reduce((prev, curr) => prev + curr)}

          />
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        {nextPokemonName && (
          <Link to={`/pokemon/${nextPokemonName}`}>
            #{pokemonData.id < 10 ? `0${pokemonData.id + 1}` : `${pokemonData.id + 1}`}
          </Link>
        )}
      </NumberPageContainer>
    </Container>
  );
}
