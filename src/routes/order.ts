import express, { Router } from "express";
import OrderController from "../controllers/OrderController.ts";

const router: Router = express.Router();

router
    .post('/', OrderController.newOrder)
    .get('', OrderController.getOrders)
    .put('/:id/cancel', OrderController.cancelOrder)

export default router