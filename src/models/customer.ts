import mongoose, { Schema, Document } from 'mongoose';

interface ICustomer extends Document {
    name: string;
    email: string;
    telefone: string;
    endereco: string;
}

const customerSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
});

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);

export default Customer;