import { Task } from "../entities/task.entity";
import { AppError } from "../errors/app-error";
import { ITaskRepository } from "../repositories/task.repository";

export class TaskService {
  constructor(private db: ITaskRepository) {}

  async updateTask(id: number, completed: boolean): Promise<Task> {
    await this.findTaskById(id);

    return await this.db.updateTask(id, completed);
  }

  async findTaskById(id: number): Promise<Task> {
    if (id <= 0) {
      throw new AppError("O id precisa ser um inteiro positivo", 400);
    }

    const task = await this.db.findTaskById(id);

    if (!task) {
      throw new AppError("Task não existe", 404);
    }

    return task;
  }

  async createTask(title: string): Promise<Task> {
    return await this.db.createTask(title);
  }

  async findAllTasks(): Promise<Task[]> {
    return await this.db.findAllTasks();
  }

  async deleteTask(id: number): Promise<Task> {
    await this.findTaskById(id);

    return await this.db.deleteTask(id);
  }
}
