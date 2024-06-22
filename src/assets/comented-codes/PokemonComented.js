import React from 'react';
import { Link, useParams } from 'react-router-dom';  // Importa React, Link para navegação e useParams para acessar os parâmetros da URL.
import { usePokemonLimit } from '../../contexts/PokemonLimitContext';  // Importa contexto para obter o limite de Pokémons.
import useFetchPokemonData from '../../hooks/useFetchPokemonData';  // Importa hook personalizado para buscar dados de um Pokémon específico.
import useFetchPokemonList from '../../hooks/useFetchPokemonList';  // Importa hook personalizado para buscar a lista de Pokémons.
import useFetchEvolutionData from '../../hooks/useFetchEvolutionData';  // Importa hook personalizado para buscar dados de evolução de um Pokémon.
import typeWeaknesses from '../../constants/typeWeaknesses';  // Importa constantes de fraquezas por tipo.
import PokemonHeader from '../../components/pokemon-header';  // Importa o cabeçalho do Pokémon.
import PokemonPageLoader from '../../components/pokemon-page-loader';  // Importa o loader da página do Pokémon.
import PokemonTypesItem from '../../components/pokemon-types-item';  // Importa o item de tipos do Pokémon.
import PokebalImage from '../../assets/icons/pokeball-icon.svg';  // Importa a imagem do ícone da Pokébola.
import InfoTabList from '../../components/info-tab-list';  // Importa a lista de abas de informações.

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
} from './styles';  // Importa componentes estilizados.
import EvolutionItemList from '../../components/evolution-item-list';  // Importa o item da lista de evoluções.

const Pokemon = () => {
  const { name } = useParams();  // Usa useParams para obter o nome do Pokémon da URL.
  const { limit } = usePokemonLimit();  // Usa o contexto para obter o limite de Pokémons.
  const pokemonData = useFetchPokemonData(name);  // Usa hook personalizado para buscar dados do Pokémon.
  const pokemonList = useFetchPokemonList(limit);  // Usa hook personalizado para buscar a lista de Pokémons.
  const evolutionDataList = useFetchEvolutionData(pokemonData?.species?.evolution_chain?.url);  // Usa hook personalizado para buscar dados de evolução do Pokémon.

  if (!pokemonData || pokemonList.length === 0) {  // Verifica se os dados do Pokémon ou a lista de Pokémons não foram carregados.
    return (
      <>
        <PokemonHeader />
        <PokemonPageLoader />
      </>
    );
  }

  const getNextPokemonName = () => {
    const currentIndex = pokemonList.findIndex(pokemon => pokemon.name === name);  // Encontra o índice do Pokémon atual na lista.
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % pokemonList.length;  // Calcula o índice do próximo Pokémon.
    return pokemonList[nextIndex].name;  // Retorna o nome do próximo Pokémon.
  };

  const getPrevPokemonName = () => {
    const currentIndex = pokemonList.findIndex(pokemon => pokemon.name === name);  // Encontra o índice do Pokémon atual na lista.
    if (currentIndex === -1) return null;
    const prevIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;  // Calcula o índice do Pokémon anterior.
    return pokemonList[prevIndex].name;  // Retorna o nome do Pokémon anterior.
  };

  const calculateWeaknesses = (types) => {
    const weaknesses = new Set();
    types.forEach((type) => {
      if (typeWeaknesses[type]) {
        typeWeaknesses[type].forEach((weakness) => weaknesses.add(weakness));
      }
    });
    return Array.from(weaknesses);  // Calcula as fraquezas baseadas nos tipos do Pokémon.
  };

  const weaknesses = calculateWeaknesses(pokemonData.types.map(type => type.name));  // Obtém as fraquezas do Pokémon.

  return (
    <Container>
      <PokemonHeader />  // Renderiza o cabeçalho do Pokémon.
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

export default Pokemon;  // Exporta o componente para ser utilizado em outras partes da aplicação.
