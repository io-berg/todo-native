import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { LatLng } from "react-native-maps";
import { Provider as PaperProvider } from "react-native-paper";
import TodoNavBar from "./components/TodoNavBar";
import { TodoProvider } from "./contexts/TodoContext";
import CameraScreen from "./Screens/CameraScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import HomeScreen from "./Screens/HomeScreen";

export type RootStackParams = {
  Home: {
    location: locationObject | undefined;
  };
  Details: {
    text?: string;
  };
  Camera: undefined;
  Map: {
    setCoordinates: (location: LatLng) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();
export type locationObject = Location.LocationObject;

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      await Location.enableNetworkProviderAsync();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <PaperProvider>
      <TodoProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <TodoNavBar {...props} />,
            }}
          >
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} location={location} />}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TodoProvider>
    </PaperProvider>
  );
}
