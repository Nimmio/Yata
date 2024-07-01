"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { CreateTodo } from "@/types/todos";
import { Todo } from "@prisma/client";

export async function createTodo(
  createTodo: Readonly<CreateTodo>
): Promise<Todo> {
  const newTodo = await prisma.todo.create({
    data: createTodo,
  });
  revalidatePath("/");

  return newTodo;
}

export async function updateTodo(
  updateTodo: Readonly<CreateTodo>,
  id: Readonly<number>
): Promise<Todo> {
  const updatedTodo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: updateTodo,
  });
  revalidatePath("/");

  return updatedTodo;
}

export async function removeTodo(id: Readonly<number>) {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}
