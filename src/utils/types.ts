import { LatLng } from "react-native-maps";

interface Todo {
  id: string;
  title: string;
  coordinates?: LatLng;
  location?: string;
  dueDate: Date;
  image?: string;
  status: "pending" | "completed" | "overdue";
}

export type { Todo };
