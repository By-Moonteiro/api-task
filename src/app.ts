import express from "express";
import { taskRoutes } from "./routes/task.routes";
import { errorHandler } from "./middlewares/error-handler";

export const app = express();

app.use(express.json());

app.use("/task", taskRoutes);

app.use(errorHandler);
