import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import { Container, EvolutionContainer, EvolutionImageContainer, InfoTabListContainer, LeftSideSection, NumberPageContainer, PokemonImageContainer, PokemonNameContainer, RightSideSection, SkillContainer } from './styles';

import PokemonHeader from '../../components/pokemon-header';
import InfoTabList from '../../components/info-tab-list';
import EvolutionItemList from '../../components/evolution-item-list';

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [evolutionImages, setEvolutionImages] = useState({});
  const [evolutionTypes, setEvolutionTypes] = useState({});
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

  const fetchEvolutionData = async (chain) => {
    const fetchPokemonData = async (name) => {
      try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
      }
    };

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

    // Log only the URLs
    Object.keys(evolutionTypes).forEach(name => evolutionTypes[name]);

  };

  useEffect(() => {
    fetchPokemonData();
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <PokemonHeader />
      <NumberPageContainer>
        <Link 
          to={`/pokemon/${pokemonData.id > 1 ? pokemonData.id : pokemonData.id -1}`}
          onClick={() => {}}
        >
          #{pokemonData.id < 10 ? `0${pokemonData.id - 1}` : `${pokemonData}`}
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
                  className={evolutionType}
                  type={<li className={evolutionType}>{evolutionType}</li>}
                />
              );
            })
              ) : (
                <>
                  {pokemonData.evolution_chain.chain.is_baby === false && (
                    <EvolutionItemList
                    pokemonName={pokemonData.evolution_chain.chain.species.name}
                    src={evolutionImages[pokemonData.evolution_chain.chain.species.name]}
                    alt={`${pokemonData.evolution_chain.chain.species.name} sprite`}
                    className={
                      evolutionTypes[pokemonData.evolution_chain.chain.species.name] 
                        ? evolutionTypes[pokemonData.evolution_chain.chain.species.name][0] 
                        : ''
                    }
                    type={
                      evolutionTypes[pokemonData.evolution_chain.chain.species.name] && 
                      evolutionTypes[pokemonData.evolution_chain.chain.species.name].map((type, index) => {
                        return (
                          <li 
                            key={index}
                            className={type}
                          >
                            {type}
                          </li>
                        );
                      })
                    }
                  />
                  )}
                  {pokemonData.evolution_chain.chain.evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].is_baby === false && (
                    <EvolutionItemList
                      pokemonName={pokemonData.evolution_chain.chain.evolves_to[0].species.name}
                      src={evolutionImages[pokemonData.evolution_chain.chain.evolves_to[0].species.name]}
                      alt={`${pokemonData.evolution_chain.chain.evolves_to[0].species.name} sprite`}
                      className={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name] ? 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name][0] : ''}
                      type={
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name] && 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].species.name].map((type, index) => {
                          return (
                            <li 
                              key={index}
                              className={type}
                            >
                              {type}
                            </li>
                          );
                        })
                      }
                    />
                  )}
                  {pokemonData.evolution_chain.chain.evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0] && pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].is_baby === false && (
                    <EvolutionItemList
                      pokemonName={pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name}
                      src={evolutionImages[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name]}
                      alt={`${pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name} sprite`}
                      className={evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name] ? 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name][0] : ''}
                      type={
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name] && 
                        evolutionTypes[pokemonData.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name].map((type, index) => {
                          return (
                            <li 
                              key={index}
                              className={type}
                            >
                              {type}
                            </li>
                          );
                        })
                      }
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
            weakness={pokemonData.types.map((type, index) => <li key={index}>{type.name}</li>)}
          />
        </InfoTabListContainer>
      </RightSideSection>
      <NumberPageContainer>
        <Link 
          to={`/pokemon/${pokemonData.id + 1}`}
          onClick={() => {}}
        >
          #{pokemonData.id < 10 ? `0${pokemonData.id}` : `${pokemonData.id}`}
        </Link>
      </NumberPageContainer>
    </Container>
  );
}
