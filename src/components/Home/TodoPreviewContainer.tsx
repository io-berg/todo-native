import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  children: React.ReactNode[];
  title: string;
};

const TodoPreviewContainer = ({ children, title }: Props) => {
  return (
    <View style={styles.conatiner}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

export default TodoPreviewContainer;

const styles = StyleSheet.create({
  conatiner: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
});
