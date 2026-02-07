import { Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { TaskService } from "../services/task.service";

export class TaskController {
  constructor(private service: TaskService) {}

  async updateTask(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const completed: unknown = req.body.completed;

    if (Number.isNaN(id)) {
      throw new AppError("Id inválido", 400);
    }

    if (typeof completed !== "boolean") {
      throw new AppError("O status da Task precisa ser um boolean", 400);
    }

    const task = await this.service.updateTask(id, completed );

    return res.status(200).json(task);
  }

  async findTaskById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw new AppError("Id inválido", 400);
    }

    const task = await this.service.findTaskById(id);

    return res.status(200).json({ task });
  }

  async createTask(req: Request, res: Response): Promise<Response> {
    const title: unknown = req.body.title;

    if (typeof title !== "string") {
      throw new AppError("Title inválido", 400);
    }

    if (title.trim().length === 0) {
      throw new AppError("O título não pode ser vazio", 400);
    }

    const task = await this.service.createTask(title);

    return res.status(201).json(task);
  }

  async deleteTask(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw new AppError("Id inválido", 400);
    }

    await this.service.deleteTask(id);

    return res.status(200).json({ message: "Task deletada com sucesso" });
  }

  async findAllTasks(_req: Request, res: Response): Promise<Response> {
    const allTasks = await this.service.findAllTasks();

    return res.status(200).json(allTasks);
  }
}
