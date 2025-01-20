import React from "react";
import { Container } from "./styles";

import PokeballIcon from "../../assets/icons/pokeball-icon.svg";
import { Link } from "react-router-dom";

export default function PokedexHeader() {
  return (
    <Container>
      <div className="menu-container">
        <Link to="/">
          <img src={PokeballIcon} alt="Icone da Homepage" />
        </Link>
      </div>
    </Container>
  );
}
