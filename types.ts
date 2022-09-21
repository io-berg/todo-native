import { LatLng } from "react-native-maps";

interface Todo {
  id: string;
  title: string;
  coordinates?: LatLng;
  completed: boolean;
}

export type { Todo };
