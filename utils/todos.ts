import { CreateTodo } from "@/types/todos";

export const TodoDefaults: CreateTodo = {
  authorId: 1,
  dueDate: null,
  groupId: null,
  isDone: false,
  priority: "NORMAL",
  text: "",
};
