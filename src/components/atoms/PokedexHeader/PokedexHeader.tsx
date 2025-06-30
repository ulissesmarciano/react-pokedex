import { Container } from '@/components/atoms/PokedexHeader/styles';

import PokeballIcon from '@/assets/icons/pokeball-icon.svg';
import { Link } from 'react-router-dom';

export default function PokedexHeader() {
  return (
    <Container data-testid="header">
      <div className="menu-container">
        <Link to="/">
          <img src={PokeballIcon} alt="icone da homepage" />
        </Link>
      </div>
    </Container>
  );
}
