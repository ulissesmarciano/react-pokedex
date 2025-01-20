import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonLimitProvider } from "./contexts/PokemonLimitContext";
import PokedexScreen from "./pages/PokedexScreen/PokedexScreen";
import PokemonScreen from "./pages/PokemonScreen/PokemonScreen";

function App() {
  return (
    <PokemonLimitProvider>
      <Router>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonScreen />} />
          <Route path="/" element={<PokedexScreen />} />
        </Routes>
      </Router>
    </PokemonLimitProvider>
  );
}

export default App;
