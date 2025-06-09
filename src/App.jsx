import { PokemonProvider } from "./contexts/PokemonContext";
import { PokemonLimitProvider } from "./contexts/PokemonLimitContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PokemonLimitProvider>
      <PokemonProvider>
        <AppRoutes />
      </PokemonProvider>
    </PokemonLimitProvider>
  );
}

export default App;
