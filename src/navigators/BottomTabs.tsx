import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../Screens/MapScreen";
import Home from "./HomeStack";

type BottomTabsParams = {
  HomeNavigator: undefined;
  Map: undefined;
};

const Tabs = createBottomTabNavigator<BottomTabsParams>();

function BottomTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeNavigator" component={Home} />
      <Tabs.Screen name="Map" component={MapScreen} />
    </Tabs.Navigator>
  );
}

export default BottomTabs;
