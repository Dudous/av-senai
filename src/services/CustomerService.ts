import Customer from "../models/customer";
import Order from "../models/order";

export const CustomerService = () => {

    const newCustomer = async ({ name, email, telefone, endereco}) =>
    {
        const customers = new Customer({ name, email, telefone, endereco });
            
        await customers.save();

        return customers;
    }

    const getOrders = async (id: string) => Order.find({idCustomer: id})

    const deleteCustomer = async (id: string) => Customer.findByIdAndDelete(id);
    
    return {
        newCustomer,
        getOrders,
        deleteCustomer
    }
}