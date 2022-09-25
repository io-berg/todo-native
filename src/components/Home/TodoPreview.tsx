import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Chip, Divider, Text } from "react-native-paper";
import { useTodo } from "../../contexts/TodoContext";
import { Todo } from "../../utils/types";

interface Props {
  todo: Todo;
  exactTime?: boolean;
  bottomDivider?: boolean;
}

const TodoPreview = ({ todo, exactTime, bottomDivider }: Props) => {
  const { toggleTodo } = useTodo();

  const todoImg = todo.image
    ? { uri: todo.image }
    : require("../../assets/favicon.png");

  return (
    <>
      <View style={style.container}>
        <Image style={style.image} source={todoImg} />
        <View>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {todo.title}
          </Text>
          <Text
            variant="bodyMedium"
            style={{
              fontSize: 15,
              color: "grey",
            }}
          >
            {exactTime
              ? todo.dueDate.toLocaleTimeString()
              : todo.dueDate.toDateString()}
          </Text>
        </View>
        <View
          style={{
            marginLeft: "auto",
          }}
        >
          <Chip
            onPress={() => toggleTodo(todo.id)}
            style={{
              backgroundColor:
                todo.status == "completed" ? "#85fc8f" : "#fc9585",
              marginLeft: "auto",
            }}
            textStyle={{
              color: "white",
            }}
            compact
          >
            <Text>{todo.status}</Text>
          </Chip>
          <Text
            style={{
              marginLeft: "auto",
              color: "grey",
            }}
          >
            {todo.location ? todo.location : "No Location"}
          </Text>
        </View>
      </View>
      {bottomDivider && (
        <Divider
          style={{
            marginTop: 10,
            marginBottom: 10,
            height: 1,
          }}
        />
      )}
    </>
  );
};

export default TodoPreview;

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
