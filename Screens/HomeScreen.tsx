import { default as React } from "react";
import { Text, View } from "react-native";
import { useTodo } from "../contexts/TodoContext";
import styles from "../styles";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const { todos } = useTodo();

  return (
    <View style={styles.container}>
      <Text>Today</Text>
      {todos ? (
        todos.map((todo) => <Text key={todo.id}>{todo.title}</Text>)
      ) : (
        <Text>No todos</Text>
      )}
    </View>
  );
};

export default HomeScreen;
