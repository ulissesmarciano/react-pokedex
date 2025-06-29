import { useState, useMemo, useRef, useEffect } from 'react';
import { usePokemon } from '@/hooks/usePokemon';

import { Container, PokemonCardContainer, TitleContainer } from './styles';

import PokedexHeader from '@/components/atoms/PokedexHeader/PokedexHeader';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import PokemonCard from '@/components/organism/PokedexCard/PokedexHeader';
import PokemonTypesItem from '@/components/atoms/PokemonTypesItem/PokemonTypesItem';
import PokemonCardLoader from '@/components/atoms/CardLoader/CardLoader';
import FilterDropDown from '@/components/organism/FilterDropDown/FilterDropDown';
import Button from '@/components/atoms/Button/Button';

import { getPokemonImage } from '@/utils/pokemonUtils';

export default function PokedexScreen() {
  const { pokemons, loading, error } = usePokemon();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [quantdidadeLista, setQuantidadeLista] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const searchNumber = parseInt(search, 10);
  const lowerSearch = search.toLowerCase();

  const pokemonsFiltered = useMemo(
    () =>
      (pokemons || []).filter((pokemon) => {
        if (filterType) {
          return pokemon.types.some((type) => type.name === filterType);
        }
        if (lowerSearch || searchNumber) {
          return (
            pokemon.name.toLowerCase().includes(lowerSearch) ||
            pokemon.id === searchNumber
          );
        }
        return true;
      }),
    [pokemons, lowerSearch, searchNumber, filterType],
  );

  const handleItemClick = (item: string) => {
    setFilterType(item);
  };

  const handleResetClick = () => {
    setFilterType('');
  };

  const verMais = () => {
    setQuantidadeLista((prev) => prev + 12);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
            $ref={searchBarRef}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <FilterDropDown
            ref={dropdownRef}
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
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
              // Corrigido: usando apenas type.name
              cardBackground={pokemon?.types?.[0]?.name}
              avatar={getPokemonImage(pokemon)}
              alt={`Foto do pokémon ${pokemon?.name}`}
              // Corrigido: usando apenas type.name
              types={pokemon?.types?.map((type, index) => (
                <PokemonTypesItem
                  key={index}
                  typeName={type.name}
                  typeBackground={type.name}
                />
              ))}
              to={`/pokemon/${pokemon.name}`}
            />
          ))
        )}
      </PokemonCardContainer>
      <Button onClick={verMais} name="Ver Mais" variant="verMaisButton" />
    </Container>
  );
}
