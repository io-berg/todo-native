import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { Todo } from "../../utils/types";
import TodoPreview from "./TodoPreview";

interface Props {
  todos: Todo[];
}

const TodaysTodos = ({ todos }: Props) => {
  return (
    <View style={styles.conatiner}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Today
      </Text>
      {todos.map((t, idx: number) => {
        return idx == todos.length - 1 ? (
          <TodoPreview key={t.id} todo={t} exactTime />
        ) : (
          <View key={t.id}>
            <TodoPreview todo={t} exactTime />
            <Divider
              style={{
                backgroundColor: "black",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default TodaysTodos;

const styles = StyleSheet.create({
  conatiner: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
});
