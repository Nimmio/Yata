import { Todo } from "@prisma/client";

export type CreateTodo = Omit<Todo, "id" | "createdAt" | "updatedAt">;
