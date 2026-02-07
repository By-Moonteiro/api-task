import { Task } from "../entities/task.entity";
import { prisma } from "./database";
import { ITaskRepository } from "./task.repository";

export class PrismaTaskRepository implements ITaskRepository {
  async findTaskById(id: number): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    return task;
  }

  async updateTask(id: number, completed: boolean): Promise<Task> {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });

    return task;
  }

  async createTask(title: string): Promise<Task> {
    const task = await prisma.task.create({
      data: { title },
    });

    return task;
  }

  async findAllTasks(): Promise<Task[]> {
    const allTasks = await prisma.task.findMany();

    return allTasks;
  }

  async deleteTask(id: number): Promise<Task> {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });

    return deletedTask;
  }
}
