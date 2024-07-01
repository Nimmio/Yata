import { Group } from "@prisma/client";

export type CreateGroup = Omit<Group, "id" | "createdAt" | "updatedAt">;
