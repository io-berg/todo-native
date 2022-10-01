import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LatLng } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigators/Index";

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
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
