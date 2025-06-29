import { Container } from '@/components/atoms/PokemonTypesItem/styles';

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
