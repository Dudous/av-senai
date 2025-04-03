import Order from "../models/order";

export const OrderService = () => {

    const newOrder = async ({ idCustomer, products, status}) =>
    {
        const orders = new Order({ idCustomer, products, status });
            
        await orders.save();

        return orders;
    }

    const getOrders = async (status: string) => 
    {
        if (!status) return Order.find()
        
        return Order.find({status: status})
    }

    const cancelOrder = async (id: string) => 
    {
        const order = await Order.findById(id)

        if(order === null) return null

        if(order.status == 'enviado' || order.status == 'entregue' || order.status == 'cancelado') return false

        return Order.findByIdAndUpdate(id, { status: 'cancelado' }, { new: true });
    }

    return {
        newOrder,
        getOrders,
        cancelOrder
    }
}