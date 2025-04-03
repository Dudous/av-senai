import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    stock: number;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: false },
    stock: { type: Number, required: true }
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;

