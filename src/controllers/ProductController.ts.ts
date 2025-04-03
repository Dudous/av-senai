import { Request, Response } from "express";
import Product from "../models/Product";
import { ProductService } from "../services/ProductService";

const service = ProductService()

class ProductController {

    static async newProduct(req: Request, res: Response): Promise<any> {

        const { name, price, stock} = req.body

        try {
            const products = await service.newProduct({ name, price, stock });
            res.status(201).json(products);
        } 
        catch (error) {
            res.status(400).json({ message: 'add product error', error });
        }
    }

    static async getProducts(req: Request, res: Response) : Promise<any> {
        const { id } = req.params;
        
        try {
            const products = await service.getProducts();
            res.status(200).json(products);
        } 
        catch (error) {
            res.status(400).json({ message: 'products search error', error });
        }
    }

    static async deleteProduct(req: Request, res: Response): Promise<any> {

        const { id } = req.params

        try {
            const product = await service.deleteProduct(id);
            if (!product) {
                res.status(404).json({ message: 'product cannot be deleted' });
                return;
            }
            res.status(200).json({ message: 'product deleted!' });
        } 
         catch (error) {
            res.status(400).json({ message: 'delete product error', error });
        }
    }
}

export default ProductController;