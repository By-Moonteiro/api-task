import { Router } from "express";
import { PrismaTaskRepository } from "../repositories/prisma-task.repository";
import { TaskService } from "../services/task.service";
import { TaskController } from "../controllers/task.controller";

export const taskRoutes = Router();

// composition root
const taskRepository = new PrismaTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// rotas
taskRoutes.patch("/:id", (req, res) =>
  taskController.updateTask(req, res),
);
taskRoutes.post("/", (req, res) => taskController.createTask(req, res));
taskRoutes.get("/:id", (req, res) => taskController.findTaskById(req, res));
taskRoutes.delete("/:id", (req, res) =>
  taskController.deleteTask(req, res),
);
taskRoutes.get("/", (req, res) => taskController.findAllTasks(req, res));
