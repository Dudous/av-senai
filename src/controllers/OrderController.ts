import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const service = OrderService()
class OrderController {

    static async newOrder(req: Request, res: Response): Promise<any> {

        const { idCustomer, products, status} = req.body

        try {
            const orders = await service.newOrder({ idCustomer, products, status });
            res.status(201).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'add order error', error });
        }
    }

    static async getOrders(req: Request, res: Response) : Promise<any> {
        const { status } = req.query;
        
        try {
            const orders = await service.getOrders(status as string);
            res.status(200).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'orders search error', error });
        }
    }

    static async cancelOrder (req: Request, res: Response) {
        const { id } = req.params;

        try {
            const task = await service.cancelOrder(id);

            if (task == null) {
                res.status(404).json({ message: 'order not found' });
                return;
            }

            if (!task) {
                res.status(400).json({ message: "Pedido não pode ser cancelado" });
                return;
            }

            res.status(200).json(task);
        } 
        catch (error) {
            res.status(400).json({ message: 'update task error', error });
        }
    }

}

export default OrderController;