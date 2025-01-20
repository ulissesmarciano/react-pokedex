import React from "react";

import { Container, SearchLabel } from "./styles";

import SearchIcon from "../../assets/icons/search-icon.svg";

export default function SearchBar({ onChange, value, ref }) {
  return (
    <Container ref={ref}>
      <SearchLabel>
        <img src={SearchIcon} alt="Ícone de pesquisa" />
        <input
          placeholder="Name or Number"
          type="text"
          onChange={onChange}
          value={value}
        />
      </SearchLabel>
    </Container>
  );
}
