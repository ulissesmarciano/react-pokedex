import {
  Container,
  DataItemAttributesList,
} from "@/components/AttributesInfoTabScreen/styles";

import MaleSimbol from "../../assets/icons/male.png";
import FemaleSimbol from "../../assets/icons/female.png";

interface AttributesInfoTabScreenProps {
  height: string;
  weight: string;
  abilities: string;
  malePercentage: string;
  femalePercentage: string;
  eggGroup: string;
  eggCycle: string;
}

export default function AttributesInfoTabScreen({
  height,
  weight,
  abilities,
  malePercentage,
  femalePercentage,
  eggGroup,
  eggCycle,
}: AttributesInfoTabScreenProps) {
  return (
    <Container>
      <DataItemAttributesList>
        Height<span>{height}</span>
      </DataItemAttributesList>
      <DataItemAttributesList>
        Weight<span>{weight}</span>
      </DataItemAttributesList>
      <DataItemAttributesList>
        Abilities<span>{abilities}</span>
      </DataItemAttributesList>

      <h5>Breeding</h5>
      <DataItemAttributesList>
        Gender
        <span>
          <img src={MaleSimbol} alt="Simbolo Macho" />
          {malePercentage}
        </span>
        <span>
          <img src={FemaleSimbol} alt="Simbolo Fêmea" />
          {femalePercentage}
        </span>
      </DataItemAttributesList>
      <DataItemAttributesList>
        Egg Group<span>{eggGroup}</span>
      </DataItemAttributesList>
      <DataItemAttributesList>
        Egg Cycle<span>{eggCycle}</span>
      </DataItemAttributesList>
    </Container>
  );
}
