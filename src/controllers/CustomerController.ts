import { Request, Response } from "express";
import Customer from "../models/customer";
import Order from "../models/order";

class CustomerController {

    static async newCustomer(req: Request, res: Response): Promise<any> {

        const { name, email, telefone, endereco} = req.body

        try {
            const customers = new Customer({ name, email, telefone, endereco });
            await customers.save();
            res.status(201).json(customers);
        } 
        catch (error) {
            res.status(400).json({ message: 'add customer error', error });
        }
    }

    static async getOrders(req: Request, res: Response) : Promise<any> {
        const { id } = req.params;
        
        try {
            const orders = await Order.find({idCustomer: id});
            res.status(200).json(orders);
        } 
        catch (error) {
            res.status(400).json({ message: 'orders search error', error });
        }
    }

    static async deleteCustomer(req: Request, res: Response): Promise<any> {

        const { id } = req.params

        try {
            const customer = await Customer.findByIdAndDelete(id);
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