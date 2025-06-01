import { PokemonLimitProvider } from "./contexts/PokemonLimitContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PokemonLimitProvider>
      <AppRoutes />
    </PokemonLimitProvider>
  );
}

export default App;
