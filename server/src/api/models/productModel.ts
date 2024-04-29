import mongoose from 'mongoose';

//Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String}
  });

//Product Model
const Product = mongoose.model('Product', productSchema);

export default Product;