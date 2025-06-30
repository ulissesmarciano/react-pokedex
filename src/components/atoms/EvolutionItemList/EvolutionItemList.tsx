import { PokemonEvolutionItem } from '@/components/atoms/EvolutionItemList/styles';
import { Link } from 'react-router-dom';

interface EvolutionItemListProps {
  src: string;
  alt: string;
  pokemonName: string;
  type: React.ReactNode[];
  className: string;
  to: string;
  onClick?: () => void;
}

export default function EvolutionItemList({
  src,
  alt,
  pokemonName,
  type,
  className,
  to,
  onClick,
}: EvolutionItemListProps) {
  return (
    <PokemonEvolutionItem>
      <Link to={to} onClick={onClick}>
        <div className="name-and-title-section">
          <div className={className}>
            <img src={src} alt={alt} />
          </div>
          <p>{pokemonName}</p>
          <ul className="skill-container">{type}</ul>
        </div>
      </Link>
    </PokemonEvolutionItem>
  );
}
