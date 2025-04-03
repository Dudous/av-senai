import Order from "../models/order";
import Product from "../models/Product";

export const ProductService = () => {

    const newProduct = async ({ name, price, stock}) =>
    {
        const products = new Product({ name, price, stock });
            
        await products.save();

        return products;
    }

    const getProducts = async () =>  Product.find()

    const deleteProduct = async (id: string) => 
    {
        const orders = await Order.find({products: id});

        if(orders.length > 0) return false

        return await Product.findByIdAndDelete(id);
    }

    return {
        newProduct,
        getProducts,
        deleteProduct,
    }
}