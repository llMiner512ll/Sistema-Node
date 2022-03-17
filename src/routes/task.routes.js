import { Router } from "express";
import {
    createTask,
    deleteTask,
    renderTask,
    taskToggleDone,
    renderTaskEdit,
    editTask,
} from "../controllers/task.controllers";

const router = Router();
router.get("/", renderTask);
router.post("/tasks/add", createTask);
router.get("/tasks/:id/toggleDone", taskToggleDone);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", editTask);
router.get("/tasks/:id/delete", deleteTask);
export default router;