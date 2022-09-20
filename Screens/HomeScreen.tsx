import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "../App";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() =>
          navigation.navigate("Details", {
            text: "Hello from Home",
          })
        }
        title="Go to Details"
      />
      <Button
        onPress={() =>
          navigation.navigate("Details", {
            text: "Hello but different",
          })
        }
        title="Go to Details"
      />
    </View>
  );
};

export default HomeScreen;
