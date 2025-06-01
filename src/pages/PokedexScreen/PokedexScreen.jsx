import React, { useState, useMemo, useRef, useEffect } from "react";
import useFetchAllPokemons from "../../hooks/useFetchAllPokemons";

import { Container, PokemonCardContainer, TitleContainer } from "./styles";

import PokedexHeader from "../../components/PokedexHeader/PokedexHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonCard from "../../components/PokedexCard/PokedexHeader";
import PokemonTypesItem from "../../components/PokemonTypesItem/PokemonTypesItem";
import PokemonCardLoader from "../../components/CardLoader/CardLoader";
import FilterDropDown from "../../components/FilterDropDown/EvolutionItemList";

import { getPokemonImage } from "../../utils/pokemonUtils";
import Button from "../../components/Button/Button";

export default function PokedexScreen() {
  const { pokemons, loading, error } = useFetchAllPokemons();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [quantdidadeLista, setQuantidadeLista] = useState(12);
  const searchBarRef = useRef();
  const dropdownRef = useRef();

  const searchNumber = parseInt(search, 10);
  const lowerSearch = search.toLowerCase();

  const pokemonsFiltered = useMemo(
    () =>
      pokemons.filter((pokemon) => {
        if (filterType) {
          return pokemon.types.some((type) => type.type.name === filterType);
        }
        if (lowerSearch || searchNumber) {
          return (
            pokemon.name.toLowerCase().includes(lowerSearch) ||
            pokemon.id === searchNumber
          );
        }
        return true;
      }),
    [pokemons, lowerSearch, searchNumber, filterType]
  );

  const handleItemClick = (item) => {
    setFilterType(item);
  };

  const handleResetClick = () => {
    setFilterType("");
  };

  const verMais = () => {
    setQuantidadeLista((prev) => prev + 12)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        const dropdownComponent =
          dropdownRef.current.querySelector(".filter-btn");
        if (dropdownComponent) dropdownComponent.click();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <PokedexHeader />
      <TitleContainer>
        <h1>Pokédex</h1>
        <p>Search for your pokemon by name or id.</p>
        <div className="search-filter-container">
          <SearchBar
            ref={searchBarRef}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <FilterDropDown
            ref={dropdownRef}
            onClickItem={handleItemClick}
            onClickResetItem={handleResetClick}
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
          pokemonsFiltered?.slice(0, quantdidadeLista).map((pokemon, index) => (
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
      <Button 
        onClick={verMais}
        name="Ver Mais"
        variant="verMaisButton"
      />
    </Container>
  );
}
