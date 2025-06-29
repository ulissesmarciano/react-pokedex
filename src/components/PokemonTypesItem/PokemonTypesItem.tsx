import { Container } from '@/components/PokemonTypesItem/styles';

interface PokemonTypesItemProps {
  typeBackground: string;
  typeName: string;
}

export default function PokemonTypesItem({
  typeBackground,
  typeName,
}: PokemonTypesItemProps) {
  return <Container className={typeBackground}>{typeName}</Container>;
}
