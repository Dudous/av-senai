import express, { Router } from "express";
import OrderController from "../controllers/OrderController.ts";

const router: Router = express.Router();

router
    .post('/', OrderController.newOrder)
    .get('', OrderController.getOrders)

export default router