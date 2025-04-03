import express, { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.ts";
import AuthController from "../controllers/AuthController.ts";

const router: Router = express.Router();

router
    .post('/register', AuthController.register)
    .post('/login', authMiddleware, AuthController.login)

export default router