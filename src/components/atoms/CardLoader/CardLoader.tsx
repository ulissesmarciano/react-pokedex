import { Container } from '@/components/atoms/CardLoader/styles';

export default function PokemonCardLoader() {
  return (
    <Container data-testid="card-loader">
      <div className="image-container" />
      <div className="bottom-info-container">
        <ul>
          <li />
          <li />
        </ul>
        <ul>
          <li />
          <li />
        </ul>
      </div>
    </Container>
  );
}
