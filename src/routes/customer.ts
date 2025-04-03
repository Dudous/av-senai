import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController.ts"

const router: Router = express.Router();

router
    .post('/', CustomerController.newCustomer)
    .get('/:id/orders', CustomerController.getOrders)
    .delete('/:id', CustomerController.deleteCustomer)

export default router