import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Container } from '@/components/PokemonHeader/styles';

export default function PokemonHeader() {
  return (
    <Container>
      <Link to="/">
        <IoArrowBack />
        <p>Pokédex</p>
      </Link>
    </Container>
  );
}
