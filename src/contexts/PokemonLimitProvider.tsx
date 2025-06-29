import { useState, type ReactNode } from "react";
import { PokemonLimitContext } from "./PokemonLimitContext";

interface PokemonLimitProviderProps {
  children: ReactNode;
}

export const PokemonLimitProvider = ({
  children,
}: PokemonLimitProviderProps) => {
  const [limit, setLimit] = useState<number>(300);

  return (
    <PokemonLimitContext.Provider value={{ limit, setLimit }}>
      {children}
    </PokemonLimitContext.Provider>
  );
};
