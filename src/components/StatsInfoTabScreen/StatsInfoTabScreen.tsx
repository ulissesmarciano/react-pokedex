import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { StatsTabScreenSection } from "@/components/StatsInfoTabScreen/styles";

interface StatsInfoTabScreenProps {
  total: number;
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
}

export default function StatsInfoTabScreen({
  total,
  hp,
  attack,
  defense,
  spAtk,
  spDef,
  speed,
}: StatsInfoTabScreenProps) {
  return (
    <StatsTabScreenSection>
      <li>
        HP
        <span>
          {hp}
          <ProgressBar progress={hp} />
        </span>
      </li>
      <li>
        Attack
        <span>
          {attack}
          <ProgressBar progress={attack} />
        </span>
      </li>
      <li>
        Defense
        <span>
          {defense}
          <ProgressBar progress={defense} />
        </span>
      </li>
      <li>
        Sp. Atk
        <span>
          {spAtk}
          <ProgressBar progress={spAtk} />
        </span>
      </li>
      <li>
        Sp. Def
        <span>
          {spDef}
          <ProgressBar progress={spDef} />
        </span>
      </li>
      <li>
        Speed
        <span>
          {speed}
          <ProgressBar progress={speed} />
        </span>
      </li>
      <li>
        Total<p>{total}</p>
      </li>
    </StatsTabScreenSection>
  );
}
