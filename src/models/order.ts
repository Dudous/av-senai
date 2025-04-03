import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
    idCustomer: string;
    products: string[];
    status: string;
}

const orderSchema: Schema = new Schema({
    idCustomer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false }],
    status: { type: String, required: true }
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;