import { Container, SearchLabel } from "@/components/SearchBar/styles";

import SearchIcon from "../../assets/icons/search-icon.svg";

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  $ref: React.RefObject<HTMLDivElement | null>;
}

export default function SearchBar({ onChange, value, $ref }: SearchBarProps) {
  return (
    <Container ref={$ref}>
      <SearchLabel>
        <img src={SearchIcon} alt="Ícone de pesquisa" />
        <input
          placeholder="Name or Number"
          type="text"
          onChange={onChange}
          value={value}
        />
      </SearchLabel>
    </Container>
  );
}
