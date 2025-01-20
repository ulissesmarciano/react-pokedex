import React from "react";
import { Container } from "./styles";

export default function PokemonTypesItem({ typeBackground, typeName }) {
  return <Container className={typeBackground}>{typeName}</Container>;
}
