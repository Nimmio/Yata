"use client";

import { TodoActions, createTodo } from "@/app/action";
import { CreateTodo } from "@/types/todos";
import { TodoDefaults } from "@/utils/todos";
import {
  Button,
  Card,
  Center,
  Flex,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Priority } from "@prisma/client";

interface TodoInput {
  text: string;
  priority: Priority;
  dueDate: Date | null;
}

const TodoInput = () => {
  const form = useForm<TodoInput>({
    mode: "uncontrolled",
    initialValues: {
      text: "",
      priority: "NORMAL",
      dueDate: null,
    },

    validate: {
      text: (value) => (value !== "" ? null : "Invalid Text"),
    },
  });

  const handleSubmit = (values: TodoInput) => {
    createTodo({
      ...TodoDefaults,
      ...values,
    });
  };

  return (
    <Card withBorder shadow="md">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Flex direction={"column"} gap={"md"}>
          <Center>
            <Text fw={700} size="lg">
              New Todo
            </Text>
          </Center>
          <TextInput
            placeholder="Todo Text"
            label="Text:"
            key={form.key("text")}
            {...form.getInputProps("text")}
          />
          <Select
            label="Priority:"
            defaultValue={"NORMAL"}
            data={[
              { label: "Lowest", value: "LOWEST" },
              { label: "Low", value: "LOW" },
              { label: "Normal", value: "NORMAL" },
              { label: "High", value: "HIGH" },
              { label: "Higher", value: "HIGHER" },
            ]}
            key={form.key("priority")}
            {...form.getInputProps("priority")}
          />
          <TextInput placeholder="DueDate" disabled label="DueDate" />
          <Button type="submit" fullWidth>
            Save
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default TodoInput;
