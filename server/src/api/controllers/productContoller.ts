import Product from "../models/productModel";
import { Request, Response } from 'express';

export const addProduct = async (req: Request, res:Response): Promise<void> => {
    const { name, price, description } = req.body; //getting the data from the user
    try {
        const product = new Product({
            name, 
            price, 
            description
        });
        await product.save();
        res.status(201).json({ message: "Product added successfully!"})
    } catch (error) {
        res.status(500).json({ message: "Error adding Product!"})
    }
}


export const deleteProduct = async (req: Request, res:Response): Promise<void> => {
        const { id } = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json({ message: "Product deleted successfully!"})
    } catch (error) {
        res.status(500).json({ message: "Error deleting Product!"})
    }
}