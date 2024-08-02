import React, { useState } from "react";
import { InfoContainer, InfoPage, NavContainer, TabButton } from "./styles";

import AboutInfoTabScreen from "../about-info-tab-screen";
import AttributesInfoTabScreen from "../attributes-info-tab-screen";
import StatsInfoTabScreen from "../stats-info-tab-screen";

const tabs = [
    { id: 1, label: "About", component: AboutInfoTabScreen },
    { id: 2, label: "Attributes", component: AttributesInfoTabScreen },
    { id: 3, label: "Stats", component: StatsInfoTabScreen },
];

export default function InfoTabList(props) {
    const [activeTab, setActiveTab] = useState(1);

    const renderTabContent = () => {
      const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
      if (ActiveComponent) {
        return <ActiveComponent {...props} />;
      }
      return null;
    };

    return (
        <section>
            <NavContainer>
                {tabs.map(tab => (
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
                {tabs.map(tab => (
                  <div key={tab.id}>
                    <h4>{tab.label}</h4>
                    <tab.component {...props} />
                  </div>
                ))}
            </InfoPage>
        </section>
    );
}


