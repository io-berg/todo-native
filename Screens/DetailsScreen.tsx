import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "../App";

interface Props {
  text?: string;
}

const DetailsScreen = ({ text }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Text>Details</Text>
      {text ? <Text>{text}</Text> : null}
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
};

export default DetailsScreen;
