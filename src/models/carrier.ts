import mongoose, { Schema, Document } from 'mongoose';

interface ICarrier extends Document {
    name: string;
    cnpj: string;
    type: string;
}

const carrierSchema: Schema = new Schema({
    name: { type: String, required: true },
    cnpj: { type: String, required: true },
    type: { type: String, required: true },
});

const Carrier = mongoose.model<ICarrier>('Carrier', carrierSchema);

export default Carrier;