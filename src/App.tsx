import { PokemonProvider } from "@/contexts/PokemonProvider";
import { PokemonLimitProvider } from "@/contexts/PokemonLimitProvider";
import AppRoutes from "@/routes/AppRoutes";

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
