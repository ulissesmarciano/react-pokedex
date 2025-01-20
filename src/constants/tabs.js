import AboutInfoTabScreen from "../components/AboutInfoTabScreen/AboutInfoTabScreen";
import AttributesInfoTabScreen from "../components/AttributesInfoTabScreen/AttributesInfoTabScreen";
import StatsInfoTabScreen from "../components/StatsInfoTabScreen/StatsInfoTabScreen";

export const tabs = [
  { id: 1, label: "About", component: AboutInfoTabScreen },
  { id: 2, label: "Attributes", component: AttributesInfoTabScreen },
  { id: 3, label: "Stats", component: StatsInfoTabScreen },
];
