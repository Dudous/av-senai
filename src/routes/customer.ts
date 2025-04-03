import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController.ts"
import { JWTMiddleware } from "../middlewares/authMiddleware.ts";

const router: Router = express.Router();

router
    .post('/', JWTMiddleware, CustomerController.newCustomer)
    .get('/:id/orders', CustomerController.getOrders)
    .delete('/:id', CustomerController.deleteCustomer)

export default router