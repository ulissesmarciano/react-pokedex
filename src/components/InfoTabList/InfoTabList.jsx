import React, { useState } from "react";
import { InfoContainer, InfoPage, NavContainer, TabButton } from "./styles";

import { tabs } from "../../constants/tabs";

export default function InfoTabList(props) {
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
