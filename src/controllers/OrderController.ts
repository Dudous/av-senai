import { Request, Response } from "express";
import Order from "../models/order";
import Product from "../models/Product";

class OrderController {

    static async newOrder(req: Request, res: Response): Promise<any> {

        const { idCustomer, products, status} = req.body

        try {
            const orders = new Order({ idCustomer, products, status });
            await orders.save();
            res.status(201).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'add order error', error });
        }
    }

    static async getOrders(req: Request, res: Response) : Promise<any> {
        const { status } = req.query;
        
        try {
            const orders = await Order.find({status: status});
            res.status(200).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'orders search error', error });
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

export default OrderController;