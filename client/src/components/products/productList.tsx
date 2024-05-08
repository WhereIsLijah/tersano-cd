import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

interface Product{
    _id: string;
    name: string;
    price: string;
    description: string;
}


export default function ProductList(){
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://localhost:4000/product/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error Fetching Products!', error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
}
