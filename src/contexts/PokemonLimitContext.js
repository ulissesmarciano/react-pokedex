// src/contexts/PokemonLimitContext.js
import React, { createContext, useContext, useState } from "react";

const PokemonLimitContext = createContext();

export const usePokemonLimit = () => useContext(PokemonLimitContext);

export const PokemonLimitProvider = ({ children }) => {
  const [limit, setLimit] = useState(300);

  return (
    <PokemonLimitContext.Provider value={{ limit, setLimit }}>
      {children}
    </PokemonLimitContext.Provider>
  );
};
