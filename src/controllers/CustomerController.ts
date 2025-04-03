import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

const service = CustomerService()

class CustomerController {

    static async newCustomer(req: Request, res: Response): Promise<any> {

        const { name, email, telefone, endereco} = req.body

        try {
            const customers = await service.newCustomer({ name, email, telefone, endereco });

            res.status(201).json(customers);
        } 
        catch (error) {
            res.status(400).json({ message: 'add customer error', error });
        }
    }

    static async getOrders(req: Request, res: Response) : Promise<any> {
        const { id } = req.params;
        
        try {
            const orders = await service.getOrders(id);
            res.status(200).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'orders search error', error });
        }
    }

    static async deleteCustomer(req: Request, res: Response): Promise<any> {

        const { id } = req.params

        const orders = await service.getOrders(id);

        if (orders.length > 0) {
            return res.status(400).json({ message: 'customer has orders, cannot be deleted' });
        }

        try {
            const customer = await service.deleteCustomer(id);
            if (!customer) {
                res.status(404).json({ message: 'customer not found' });
            }
            res.status(200).json({ message: 'customer deleted!' });
        } 
         catch (error) {
            res.status(400).json({ message: 'delete customer error', error });
        }
    }
}

export default CustomerController;