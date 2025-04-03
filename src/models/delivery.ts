import mongoose, { Schema, Document } from 'mongoose';

interface IDelivery extends Document {
    idOrder: string;
    idCarrier: string;
    status: string;
}

const deliverySchema: Schema = new Schema({
    idOrder: { type: mongoose.Schema.ObjectId, required: true },
    idCarrier: { type: mongoose.Schema.ObjectId, required: true },
    status: { type: String, required: true },
});

const Delivery = mongoose.model<IDelivery>('Delivery', deliverySchema);

export default Delivery;