import { Task } from "../entities/task.entity";

export interface ITaskRepository {
  findTaskById(id: number): Promise<Task | null>;
  updateTask(id: number, completed: boolean): Promise<Task>;
  createTask(titule: string): Promise<Task>;
  findAllTasks(): Promise<Task[]>;
  deleteTask(id: number): Promise<Task>;
}
