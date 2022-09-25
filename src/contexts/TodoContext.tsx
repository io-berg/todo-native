import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { LatLng } from "react-native-maps";
import data from "../utils/mockdata";
import { Todo } from "../utils/types";

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, dueDate: Date, coordinates?: LatLng) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  toggleTodo: (id: string) => void;
  clearTodos: () => void;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (title: string, dueDate: Date, coordinates?: LatLng) => {},
  removeTodo: (id: string) => {},
  updateTodo: (id: string, title: string) => {},
  toggleTodo: (id: string) => {},
  clearTodos: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    AsyncStorage.getItem("todos").then((data) => {
      if (data) {
        return JSON.parse(data);
      }
    });

    return data;
  });

  const addTodo = (title: string, dueDate: Date, coordinates?: LatLng) => {
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      title,
      coordinates,
      status: "pending",
      dueDate,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.status = todo.status === "completed" ? "pending" : "completed";
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        toggleTodo,
        clearTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
