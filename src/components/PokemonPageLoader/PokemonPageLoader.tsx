import PokeballIcon from "../../assets/icons/pokeball-icon.svg";
import { Container } from "@/components/PokemonPageLoader/styles";

export default function PokemonPageLoader() {
  return (
    <Container>
      <img src={PokeballIcon} alt="carregando página" />
    </Container>
  );
}
