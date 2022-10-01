import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/DetailsScreen";
import HomeScreen from "../Screens/HomeScreen";

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
