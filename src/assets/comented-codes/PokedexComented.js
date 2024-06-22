import React, { useState, useMemo } from 'react';  // Importa React, useState para gerenciar estados e useMemo para memorizar valores.
import useFetchAllPokemons from '../../hooks/useFetchAllPokemons';  // Importa o hook personalizado para buscar todos os Pokémons.

import { Container, PokemonCardContainer, TitleContainer } from './styles';  // Importa componentes estilizados.

import PokedexHeader from '../../components/pokedex-header';  // Importa o cabeçalho da Pokédex.
import SearchBar from '../../components/search-bar';  // Importa a barra de busca.
import PokemonCard from '../../components/pokemon-card';  // Importa o componente de card do Pokémon.
import PokemonTypesItem from '../../components/pokemon-types-item';  // Importa o componente de item de tipos do Pokémon.
import PokemonCardLoader from '../../components/card-loader';  // Importa o loader do card do Pokémon.

export default function Pokedex() {  // Define o componente funcional Pokedex.
    const { pokemons, loading, error } = useFetchAllPokemons();  // Usa o hook personalizado para buscar todos os Pokémons.
    const [search, setSearch] = useState('');  // Estado para gerenciar o valor de busca.

    const searchNumber = parseInt(search, 10);  // Converte o valor de busca para número inteiro.
    const lowerSearch = search.toLowerCase();  // Converte o valor de busca para minúsculas.

    const pokemonsFiltered = useMemo(() =>  // Usa useMemo para memorizar a lista de Pokémons filtrados.
        pokemons.filter((pokemon) =>  // Filtra a lista de Pokémons.
            pokemon.name.toLowerCase().includes(lowerSearch) ||  // Verifica se o nome do Pokémon inclui o valor de busca.
            pokemon.id === searchNumber  // Ou se o ID do Pokémon é igual ao valor de busca.
        ), [pokemons, lowerSearch, searchNumber]  // Define as dependências para recalcular o valor memorizado.
    );

    return (
        <Container>
            <PokedexHeader />  // Renderiza o cabeçalho da Pokédex.
            <div>
                <TitleContainer>
                    <h2>Pokédex</h2>
                    <p>Procure por seu pokémon pelo nome ou seu número</p>
                </TitleContainer>
                <div>
                    <SearchBar 
                        onChange={(event) => setSearch(event.target.value)}  // Atualiza o estado de busca quando o valor do input muda.
                        value={search}  // Define o valor do input como o estado de busca.
                    />
                </div>
            </div>
            <PokemonCardContainer>
                {loading ? (  // Renderiza o loader se os dados ainda estão sendo carregados.
                    Array.from({ length: 50 }).map((_, index) => (
                        <PokemonCardLoader key={index} />
                    ))
                ) : error ? (  // Renderiza uma mensagem de erro se houver erro.
                    <div>{error}</div>
                ) : (  // Renderiza a lista de Pokémons filtrados.
                    pokemonsFiltered.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            cardBackground={pokemon.types[0].type.name}  // Define o fundo do card com base no tipo do Pokémon.
                            avatar={  // Define a imagem do Pokémon.
                                pokemon.sprites.other.dream_world.front_default === null
                                    ? pokemon.sprites.other['official-artwork'].front_default
                                    : pokemon.sprites.other.dream_world.front_default
                            }
                            alt={`Foto do pokémon ${pokemon.name}`}  // Texto alternativo da imagem.
                            types={pokemon.types.map((type, index) => (  // Mapeia os tipos do Pokémon para renderizar os componentes de tipos.
                                <PokemonTypesItem
                                    key={index}
                                    typeName={type.type.name}
                                    typeBackground={type.type.name}
                                />
                            ))}
                            to={`/pokemon/${pokemon.name}`}  // Define o link para a página do Pokémon.
                        />
                    ))
                )}
            </PokemonCardContainer>
        </Container>
    );
}
