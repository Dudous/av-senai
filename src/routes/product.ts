import express, { Router } from "express";
import ProductController from "../controllers/ProductController.ts"

const router: Router = express.Router();

router
    .post('/', ProductController.newProduct)
    .delete('/:id', ProductController.deleteProduct)
    .get('/', ProductController.getProducts)

export default router