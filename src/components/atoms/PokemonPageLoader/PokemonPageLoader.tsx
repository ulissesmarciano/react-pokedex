import PokeballIcon from '@/assets/icons/pokeball-icon.svg';
import { Container } from '@/components/atoms/PokemonPageLoader/styles';

export default function PokemonPageLoader() {
  return (
    <Container>
      <img src={PokeballIcon} alt="carregando página" />
    </Container>
  );
}
