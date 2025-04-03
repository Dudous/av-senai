import { Request, Response } from "express";
import Order from "../models/order";
import Product from "../models/Product";

class ProductController {

    static async newProduct(req: Request, res: Response): Promise<any> {

        const { name, price, stock} = req.body

        try {
            const products = new Product({ name, price, stock });
            await products.save();
            res.status(201).json(products);
        } 
        catch (error) {
            res.status(400).json({ message: 'add product error', error });
        }
    }

    static async getProducts(req: Request, res: Response) : Promise<any> {
        const { id } = req.params;
        
        try {
            const products = await Product.find({idCustomer: id});
            res.status(200).json(products);
        } 
        catch (error) {
            res.status(400).json({ message: 'products search error', error });
        }
    }

    static async deleteProduct(req: Request, res: Response): Promise<any> {

        const { id } = req.params

        try {
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                res.status(404).json({ message: 'product not found' });
            }
            res.status(200).json({ message: 'product deleted!' });
        } 
         catch (error) {
            res.status(400).json({ message: 'delete product error', error });
        }
    }
}

export default ProductController;