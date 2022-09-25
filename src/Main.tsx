import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";

const Main = () => {
  return (
    <PaperProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </PaperProvider>
  );
};

registerRootComponent(Main);
