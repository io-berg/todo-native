import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Details">;

const DetailsScreen: FC<Props> = ({ navigation, route }) => {
  const text = route.params?.text;

  return (
    <View>
      <Text>Details</Text>
      {text ? <Text>{text}</Text> : null}
      {/* <Button onPress={() => navigation.navigate("Home")} title="Go to Home" /> */}
    </View>
  );
};

export default DetailsScreen;
