import prisma from "@/utils/prisma";
import { Center, Container } from "@mantine/core";
import TodoInput from "@/components/todos/TodoInput";
import { Todo } from "@prisma/client";

export default async function Home() {
  const firstUser = await prisma.user.findFirst();
  if (!firstUser) {
    const bcrypt = require("bcrypt");
    await prisma.user.create({
      data: {
        fullName: "Admin",
        username: "admin",
        passwordHash: bcrypt.hashSync("password", 8),
      },
    });
  }

  const todos: Todo[] = await prisma.todo.findMany();

  return (
    <main>
      <Container>
        <Center>
          <TodoInput />
        </Center>
      </Container>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}
