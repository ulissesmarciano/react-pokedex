import { Container } from '@/components/PokedexCard/styles';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  to: string;
  cardBackground: string;
  avatar: string;
  alt: string;
  id: number;
  name: string;
  types: React.ReactNode[];
}

export default function PokemonCard({
  to,
  cardBackground,
  avatar,
  alt,
  id,
  name,
  types,
}: PokemonCardProps) {
  return (
    <Link to={to}>
      <Container>
        <div className={`${cardBackground} image-container`}>
          <picture>
            <img src={avatar} alt={alt} />
          </picture>
        </div>
        <div className="card-bottom-container">
          <div className="card-title-container">
            <p>#{id < 10 ? `0${id}` : `${id}`}</p>
            <h4>{name}</h4>
          </div>
          <ul>{types}</ul>
        </div>
      </Container>
    </Link>
  );
}
