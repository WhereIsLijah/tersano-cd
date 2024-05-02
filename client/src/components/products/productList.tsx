import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import './productlist.css';

interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/product/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (productId: string) => {
        try {
            const response = await fetch(`http://localhost:4000/product/${productId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
           
            setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="product-list-container">
            <h1 className="product-list-title">Product List</h1>
            <button className="add-product-button" onClick={() => navigate('/products/add-product')}>Add Product</button>
            {products.map(product => (
                <div key={product._id} className="product-item">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-description">Description: {product.description}</p>
                    <button className="delete-button" onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
