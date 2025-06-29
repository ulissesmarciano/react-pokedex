import { useState } from "react";
import {
  InfoContainer,
  InfoPage,
  NavContainer,
  TabButton,
} from "@/components/InfoTabList/styles";
import { tabs } from "@/constants/tabs";

interface InfoTabListProps {
  story: string;
  weakness: string[];
  height: string;
  weight: string;
  abilities: string;
  malePercentage: string;
  femalePercentage: string;
  eggGroup: string;
  eggCycle: string;
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
  total: number;
}

export default function InfoTabList(props: InfoTabListProps) {
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;
    if (ActiveComponent) {
      return <ActiveComponent {...props} />;
    }
    return null;
  };

  return (
    <section>
      <NavContainer>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            $isActive={activeTab === tab.id}
          >
            {tab.label}
          </TabButton>
        ))}
      </NavContainer>

      <InfoContainer>{renderTabContent()}</InfoContainer>

      <InfoPage>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <h4>{tab.label}</h4>
            <tab.component {...props} />
          </div>
        ))}
      </InfoPage>
    </section>
  );
}
