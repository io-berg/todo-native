import { Todo } from "./types";

const today = new Date();
function RandomDayThisWeek() {
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + Math.floor(Math.random() * 10)
  );
}

function randomTimeToday() {
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60)
  );
}

const data: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    dueDate: randomTimeToday(),
    status: "pending",
  },
  {
    id: "2",
    title: "Todo 2",
    dueDate: randomTimeToday(),
    status: "completed",
  },
  {
    id: "3",
    title: "Todo 3",
    dueDate: RandomDayThisWeek(),
    status: "pending",
  },
  {
    id: "4",
    title: "Todo 4",
    dueDate: RandomDayThisWeek(),
    status: "pending",
  },
  {
    id: "5",
    title: "Todo 5",
    dueDate: new Date(),
    status: "overdue",
  },
];

export default data;
