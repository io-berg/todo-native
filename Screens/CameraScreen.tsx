import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
