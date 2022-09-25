import { default as React } from "react";
import { View } from "react-native";
import styles from "../../styles";
import TodoPreview from "../components/Home/TodoPreview";
import TodoPreviewContainer from "../components/Home/TodoPreviewContainer";
import { useTodo } from "../contexts/TodoContext";
import { isAfterToday, isToday } from "../utils/dateComparison";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const { todos } = useTodo();

  return (
    <View style={styles.container}>
      <TodoPreviewContainer title="Overdue">
        {todos
          .filter(
            (todo) => todo.dueDate < new Date() && todo.status != "completed"
          )
          .map((todo, idx, arr) => (
            <TodoPreview
              key={todo.id}
              todo={todo}
              bottomDivider={idx !== arr.length - 1}
            />
          ))}
      </TodoPreviewContainer>
      <TodoPreviewContainer title="Today's Todos">
        {todos
          .filter((todo) => isToday(todo.dueDate))
          .map((todo, idx, arr) => (
            <TodoPreview
              key={todo.id}
              todo={todo}
              bottomDivider={idx !== arr.length - 1}
              exactTime
            />
          ))}
      </TodoPreviewContainer>
      <TodoPreviewContainer title="Upcoming Todos">
        {todos
          .filter((todo) => isAfterToday(todo.dueDate))
          .map((todo, idx, arr) => (
            <TodoPreview
              key={todo.id}
              todo={todo}
              bottomDivider={idx !== arr.length - 1}
            />
          ))}
      </TodoPreviewContainer>
    </View>
  );
};

export default HomeScreen;
