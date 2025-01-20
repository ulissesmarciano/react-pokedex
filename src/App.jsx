import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonLimitProvider } from "./contexts/PokemonLimitContext";
import Pokedex from "./pages/pokedex";
import Pokemon from "./pages/pokemon";

function App() {
  return (
    <PokemonLimitProvider>
      <Router>
        <Routes>
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </Router>
    </PokemonLimitProvider>
  );
}

export default App;
