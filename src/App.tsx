import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LatLng } from "react-native-maps";
import TodoNavBar from "./components/TodoNavBar";
import DetailsScreen from "./Screens/DetailsScreen";
import HomeScreen from "./Screens/HomeScreen";

export type RootStackParams = {
  Home: {};
  Details: {
    text?: string;
  };
  Map: {
    setCoordinates: (location: LatLng) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <TodoNavBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
