import React, { useState, useMemo } from 'react';
import useFetchAllPokemons from '../../hooks/useFetchAllPokemons';

import { Container, PokemonCardContainer, TitleContainer } from './styles';

import PokedexHeader from '../../components/pokedex-header';
import SearchBar from '../../components/search-bar';
import PokemonCard from '../../components/pokemon-card';
import PokemonTypesItem from '../../components/pokemon-types-item';
import PokemonCardLoader from '../../components/card-loader';

import { getPokemonImage } from '../../utils/pokemonUtils';
import FilterDropDown from '../../components/filter-dropdown';

export default function Pokedex() {
    const { pokemons, loading, error } = useFetchAllPokemons();
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');

    const searchNumber = parseInt(search, 10);
    const lowerSearch = search.toLowerCase();

    const pokemonsFiltered = useMemo(() =>
        pokemons.filter((pokemon) => {
            if (filterType) {
                return pokemon.types.some((type) => type.type.name === filterType);
            }
            if (lowerSearch || searchNumber) {
                return pokemon.name.toLowerCase().includes(lowerSearch) || pokemon.id === searchNumber;
            }
            return true;
        }),
        [pokemons, lowerSearch, searchNumber, filterType]
    );

    const handleItemClick = (item) => {
        setFilterType(item);
    };


    return (
        <Container>
            <PokedexHeader />
            <TitleContainer>
                <h1>Pokédex</h1>
                <p>Procure por seu pokémon pelo nome ou seu número</p>
                <div className='search-filter-container'>
                    <SearchBar
                        onChange={(event) => setSearch(event.target.value)}
                        value={search}
                    />
                    <FilterDropDown
                        onClickItem={handleItemClick}
                        onClickResetItem={() => setFilterType('')}
                    />
                </div>
            </TitleContainer>
            <PokemonCardContainer>
                {loading ? (
                    Array.from({ length: 50 }).map((_, index) => (
                        <PokemonCardLoader key={index} />
                    ))
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    pokemonsFiltered?.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            id={pokemon?.id}
                            name={pokemon?.name}
                            cardBackground={pokemon?.types?.[0].type.name}
                            avatar={getPokemonImage(pokemon)}
                            alt={`Foto do pokémon ${pokemon?.name}`}
                            types={pokemon?.types?.map((type, index) => (
                                <PokemonTypesItem
                                    key={index}
                                    typeName={type?.type?.name}
                                    typeBackground={type?.type?.name}
                                />
                            ))}
                            to={`/pokemon/${pokemon.name}`}
                        />
                    ))
                )}
            </PokemonCardContainer>
        </Container>
    );
}

