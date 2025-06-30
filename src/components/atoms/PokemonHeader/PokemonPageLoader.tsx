import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Container } from '@/components/atoms/PokemonHeader/styles';

export default function PokemonHeader() {
  return (
    <Container data-testid="header">
      <Link to="/">
        <IoArrowBack />
        <p>Pokédex</p>
      </Link>
    </Container>
  );
}
