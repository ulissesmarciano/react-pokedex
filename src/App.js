import { BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
 
import Pokedex from "./pages/pokedex";
import Pokemon from "./pages/pokemon";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
