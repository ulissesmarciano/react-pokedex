import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokedexScreen from '@/pages/PokedexScreen/PokedexScreen';
import PokemonScreen from '@/pages/PokemonScreen/PokemonScreen';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonScreen />} />
        <Route path="/" element={<PokedexScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
